import { ICardInDeck } from '@/interfaces/cardInDeck.interface';
import { RequestWithOptions } from '@/interfaces/request.interface';
import { DeckService } from '@/services/deck.service';
import { Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('decks')
export class DeckController {
    constructor(private readonly service: DeckService) {}

    @Post('/deckCode')
    async generateDeckcode(
        @Res() res: Response,
        @Req() req: RequestWithOptions,
    ) {
        try {
            const { body }: { body: { deck: ICardInDeck[] } } = req;
            const rs = await this.service.generateDeckcode(body.deck);
            return res.status(200).json(rs);
        } catch (error) {
            throw error;
        }
    }

    @Get('/deckCode/:deckcode')
    async getDeckFromDeckcode(
        @Param('deckcode') deckcode: string,
        @Res() res: Response,
    ) {
        try {
            const rs = await this.service.getDeckFromDeckcode(deckcode);
            return res.status(200).json(rs);
        } catch (error) {
            throw error;
        }
    }
}
