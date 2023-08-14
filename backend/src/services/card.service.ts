import { Card } from '@/entities/card.entity';
import { Options } from '@/interfaces/request.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CardService {
    async listCardCanCollectible(options: Options) {
        options.where = Object.assign(options.where, { collectible: true });
        console.log(options.where);

        const data = await Card.findAndCountAll(options);

        return data;
    }
}
