export interface IManaCounter {
  zero: number;
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
  six: number;
  seven: number;
  eight: number;
  nine: number;
  more: number;
  max: number;
}

export function defaultManaCounter(): IManaCounter {
  const d: IManaCounter = {
    zero: 0,
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    more: 0,
    max: 0,
  };
  return d;
}
