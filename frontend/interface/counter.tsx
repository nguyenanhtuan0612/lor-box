export interface ICounter {
  champion: number;
  unit: number;
  spell: number;
  landmark: number;
  equipment: number;
  all: number;
}

export function defaultCounter(): ICounter {
  const d: ICounter = { champion: 0, unit: 0, spell: 0, landmark: 0, equipment: 0, all: 0 };
  return d;
}
