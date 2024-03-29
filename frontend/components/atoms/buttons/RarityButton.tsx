import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Champion from '@/public/img/rarity/champion.png';
import Epic from '@/public/img/rarity/epic.png';
import Rare from '@/public/img/rarity/rare.png';
import Common from '@/public/img/rarity/common.png';

interface Props {
  icon: 'Champion' | 'Epic' | 'Rare' | 'Common';
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
}

export default function RarityButton(props: Props) {
  const listIcon = {
    Champion,
    Epic,
    Rare,
    Common,
  };
  const listIconStrDisplay = {
    Champion: 'Anh hùng',
    Epic: 'Sử thi',
    Rare: 'Hiếm',
    Common: 'Thường',
  };
  const [active, setActive] = useState(false);

  function checkActive() {
    const arr = props.value;
    return arr.includes(props.icon);
  }

  useEffect(() => {
    setActive(checkActive());
  }, [props.value]);

  return (
    <div
      data-tooltip-id="tooltip"
      data-tooltip-content={listIconStrDisplay[props.icon]}
      data-tooltip-place="top-start"
      onClick={() => {
        const arr = props.value;
        if (active) {
          const index = arr.indexOf(props.icon);
          if (index !== -1) {
            const temp = arr.filter(function (e) {
              return e !== props.icon;
            });
            props.setValue(temp);
          }
        } else {
          props.setValue([...arr, props.icon]);
        }
        setActive(!active);
      }}
      className={`active:bg-gray-500 relative flex 2xl:w-12 2xl:h-12 w-10 h-10 justify-center items-center rounded-full border ${
        active ? 'bg-gray-600/[.8] border-yellow-200' : 'bg-gray-600/[.3] border-gray-500'
      }  hover:bg-gray-500/[.8] hover:cursor-pointer`}
    >
      {active ? <FontAwesomeIcon icon={faCheck} className="absolute -right-0.5 -top-0.5 text-green-600" /> : <></>}
      <Image src={listIcon[props.icon]} alt="icon-regions" height={32} />
    </div>
  );
}
