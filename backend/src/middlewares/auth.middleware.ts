import { NextFunction, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { User } from '@entities/users.entity';
import { RequestWithUser } from '@interfaces/auth.interface';
import { IUser } from '@/interfaces/users.interface';
import { errors } from '@/utils/errors';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { ExceptionWithMessage } from '@/exceptions/HttpException';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly jwtService: JwtService) {}
    async use(req: RequestWithUser, res: Response, next: NextFunction) {
        try {
            const Authorization = req.header('Authorization')
                ? req.header('Authorization').split('Bearer ')[1]
                : null;

            if (Authorization) {
                const tokenDecode: any = this.jwtService.decode(Authorization);
                const findUser: IUser = await User.findOne(tokenDecode.id);

                if (findUser) {
                    req.auth = findUser;
                    next();
                } else {
                    next(
                        new ExceptionWithMessage(
                            errors.LOGIN_ERROR_UNAUTHORIZE.detail,
                            401,
                            errors.LOGIN_ERROR_UNAUTHORIZE.code,
                            'Wrong authentication token',
                        ),
                    );
                }
            } else {
                req.auth = null;
                next();
            }
        } catch (error) {
            console.log(error);

            next(
                new ExceptionWithMessage(
                    errors.LOGIN_ERROR_UNAUTHORIZE.detail,
                    401,
                    errors.LOGIN_ERROR_UNAUTHORIZE.code,
                    'Wrong authentication token',
                ),
            );
        }
    }
}
