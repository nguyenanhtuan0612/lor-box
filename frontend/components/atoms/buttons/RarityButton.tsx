import Image from 'next/image';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import champion from '@/public/img/rarity/champion.png';
import epic from '@/public/img/rarity/epic.png';
import rare from '@/public/img/rarity/rare.png';
import common from '@/public/img/rarity/common.png';

interface Props {
  active: boolean;
  icon: 'champion' | 'epic' | 'rare' | 'common';
}

export default function RarityButton(props: Props) {
  const listIcon = {
    champion,
    epic,
    rare,
    common,
  };
  const [active, setActive] = useState(props.active);

  return (
    <div
      onClick={() => {
        setActive(!active);
      }}
      className={`active:bg-gray-500 relative flex w-10 h-10 justify-center items-center rounded-full border ${
        active ? 'bg-gray-600/[.8] border-yellow-200' : 'bg-gray-600/[.3] border-gray-500'
      }  hover:bg-gray-500/[.8]`}
    >
      {active ? <FontAwesomeIcon icon={faCheck} className="absolute -right-0.5 -top-0.5 text-green-600" /> : <></>}
      <Image src={listIcon[props.icon]} alt="icon-regions" height={32} />
    </div>
  );
}
