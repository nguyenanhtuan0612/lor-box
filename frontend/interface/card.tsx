export interface ICard {
  id: number;
  cardCode: string;
  name: string;
  type: string;
  subtypes: string[];
  gameAbsolutePath: string;
  fullAbsolutePath: string;
  regionRefs: string[];
  attack: number;
  health: number;
  cost: number;
  description: string;
  descriptionRaw: string;
  levelupDescription: string;
  levelupDescriptionRaw: string;
  keywordRefs: string[];
  spellSpeedRef: string;
  rarityRef: string;
  collectible: boolean;
  gameSet: string;
  formatRefs: string[];
  flavorText: string;
  associatedCardRefs: string[];
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export function defaultCard(): ICard {
  const d: ICard = {
    id: 0,
    cardCode: '',
    name: '',
    type: '',
    subtypes: [],
    gameAbsolutePath: '',
    fullAbsolutePath: '',
    regionRefs: [],
    attack: 0,
    health: 0,
    cost: 0,
    description: '',
    descriptionRaw: '',
    levelupDescription: '',
    levelupDescriptionRaw: '',
    keywordRefs: [],
    spellSpeedRef: '',
    rarityRef: '',
    collectible: true,
    gameSet: '',
    formatRefs: [],
    flavorText: '',
    associatedCardRefs: [],
    active: true,
  };

  return d;
}
