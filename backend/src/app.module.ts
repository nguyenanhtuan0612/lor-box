import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfigs, authConfigs } from '@/config';
import { PostgreSqlModule } from '@databases';
import { JwtModule } from '@nestjs/jwt';
import UsersController from './controllers/users.controller';
import { UsersService } from './services/users.service';
import SystemController from './controllers/system.contrller';
import { SystemService } from './services/system.service';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { QueryMiddleware } from './middlewares/query.middleware';
import { CardController } from './controllers/card.controller';
import { CardService } from './services/card.service';
const ENV = process.env.NODE_ENV;
console.log(ENV);

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [appConfigs, authConfigs],
            envFilePath: !ENV ? '.env.development' : `.env.${ENV}`,
        }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async () => ({
                secret: authConfigs().jwtSecretKey,
            }),
            inject: [ConfigService],
        }),
        HttpModule.registerAsync({
            useFactory: () => ({
                timeout: 5000,
                maxRedirects: 5,
            }),
        }),
        PostgreSqlModule,
    ],
    controllers: [
        AppController,
        UsersController,
        AuthController,
        SystemController,
        CardController,
    ],
    providers: [
        AppService,
        UsersService,
        AuthService,
        SystemService,
        CardService,
    ],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes('*');
        consumer
            .apply(QueryMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.GET });
    }
    constructor() {
        //console.log(appConfigs());
    }
}
