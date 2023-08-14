import { Card } from '@/entities/card.entity';

export interface ICardInDeck {
    card: Card;
    cardCode: string;
    color: string; //'#E29E76';
    count: number;
    cost: number;
    name: string;
}
