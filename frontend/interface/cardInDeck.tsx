import { ICard } from './card';

export interface ICardInDeck {
  card: ICard;
  cardCode: string;
  color: string; //'#E29E76';
  count: number;
  cost: number;
  name: string;
}
