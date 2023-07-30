import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import equipment from '@/public/img/svg/icon-equipment.svg';
import champion from '@/public/img/svg/icon-champion.svg';
import spell from '@/public/img/svg/icon-spell.svg';
import unit from '@/public/img/svg/icon-unit.svg';
import landmark from '@/public/img/svg/icon-landmark.svg';
import card from '@/public/img/svg/icon-card.svg';

interface Props {
  active: boolean;
  icon: 'equipment' | 'spell' | 'unit' | 'landmark';
}

export default function CardTyeCircleButton(props: Props) {
  const listIcon = {
    equipment,
    spell,
    unit,
    landmark,
  };

  return (
    <div className={`relative flex w-10 h-10 justify-center items-center rounded-full border ${props.active ? 'bg-gray-500/[.8]' : 'bg-gray-500/[.3]'} border-gray-500 hover:bg-gray-500/[.8]`}>
      {props.active ? <FontAwesomeIcon icon={faCheck} className="absolute -right-0.5 -top-0.5 text-green-600" /> : <></>}
      <Image src={listIcon[props.icon]} alt="icon-regions" height={28} />
    </div>
  );
}
