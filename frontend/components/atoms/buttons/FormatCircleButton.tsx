import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import standard from '@/public/img/formats/queue_select_standard_toggle_active.png';
import eternal from '@/public/img/formats/queue_select_eternal_toggle_active.png';

interface Props {
  active: boolean;
  icon: 'standard' | 'eternal';
}

export default function FormatCircleButton(props: Props) {
  const listIcon = { standard, eternal };

  return (
    <div className={`relative flex w-10 h-10 justify-center items-center rounded-full border ${props.active ? 'bg-gray-500/[.8]' : 'bg-gray-500/[.3]'} border-gray-500 hover:bg-gray-500/[.8]`}>
      {props.active ? <FontAwesomeIcon icon={faCheck} className="absolute -right-0.5 -top-0.5 text-green-600" /> : <></>}
      <Image src={listIcon[props.icon]} alt="icon-regions" height={28} />
    </div>
  );
}
