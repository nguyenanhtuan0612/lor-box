import { RequestWithOptions } from '@/interfaces/request.interface';
import { CardService } from '@/services/card.service';
import { Controller, Get, Req, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('cards')
export class CardController {
    constructor(private readonly service: CardService) {}

    @Get('/')
    async listCardCanCollectible(
        @Res() res: Response,
        @Req() req: RequestWithOptions,
    ) {
        try {
            const { options } = req;
            const rs = await this.service.listCardCanCollectible(options);
            return res.status(200).json(rs);
        } catch (error) {
            throw error;
        }
    }
}
