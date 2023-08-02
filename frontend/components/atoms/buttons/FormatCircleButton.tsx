import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react';
import standard from '@/public/img/formats/queue_select_standard_toggle_active.png';
import eternal from '@/public/img/formats/queue_select_eternal_toggle_active.png';

interface Props {
  active: boolean;
  icon: 'standard' | 'eternal';
}

export default function FormatCircleButton(props: Props) {
  const listIcon = { standard, eternal };

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
      <div className="w-8 h-8">
        <Image src={listIcon[props.icon]} alt="icon-regions" />
      </div>
    </div>
  );
}
