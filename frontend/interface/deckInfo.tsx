import { ICard } from './card';

export interface IDeckInfo {
  regions: string[];
  mainCard: ICard | null;
  champions: string[];
  deckcode?: string;
}
