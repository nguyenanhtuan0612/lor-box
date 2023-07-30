import Image from 'next/image';
import React from 'react';
import equipment from '@/public/img/svg/icon-equipment.svg';
import champion from '@/public/img/svg/icon-champion.svg';
import spell from '@/public/img/svg/icon-spell.svg';
import unit from '@/public/img/svg/icon-unit.svg';
import landmark from '@/public/img/svg/icon-landmark.svg';
import card from '@/public/img/svg/icon-card.svg';

interface Props {
  num: number;
  total?: number;
  type: 'equipment' | 'champion' | 'spell' | 'unit' | 'landmark' | 'card';
}

export default function Counter(props: Props) {
  function counter() {
    if (props.total) {
      return (
        <span>
          {props.num}/{props.total}
        </span>
      );
    }
    return <span>{props.num}</span>;
  }

  const listIcon = {
    equipment,
    champion,
    spell,
    unit,
    landmark,
    card,
  };

  return (
    <div>
      <div className="flex items-center justify-center text-white">{counter()}</div>
      <div className="flex items-center justify-center">
        <Image alt="icon-deck" width={24} height={24} src={listIcon[props.type]}></Image>
      </div>
    </div>
  );
}
