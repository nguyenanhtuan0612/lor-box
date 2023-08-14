import { ICardInDeck } from '@/interfaces/cardInDeck.interface';
import { Injectable } from '@nestjs/common';
import { Deck, getCodeFromDeck, getDeckFromCode } from 'lor-deckcodes-ts';

@Injectable()
export class DeckService {
    async generateDeckcode(deck: ICardInDeck[]) {
        const deckCard: Deck = [];

        for (const iterator of deck) {
            deckCard.push({
                cardCode: iterator.cardCode,
                count: iterator.count,
            });
        }

        const deckCode: string = getCodeFromDeck(deckCard);

        return { deckCode };
    }

    async getDeckFromDeckcode(code: string) {
        const decodedDeck: Deck = getDeckFromCode(code);
        return { decodedDeck };
    }
}
