import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import standard from '@/public/img/formats/queue_select_standard_toggle_active.png';
import eternal from '@/public/img/formats/queue_select_eternal_toggle_active.png';

interface Props {
  icon: 'standard' | 'eternal';
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
}

export default function FormatCircleButton(props: Props) {
  const listIcon = { standard, eternal };
  const listFormatStr = {
    eternal: 'client_Formats_Eternal_name',
    standard: 'client_Formats_Standard_name',
  };
  const listFormatStrDisplay = {
    eternal: 'Chế độ vô hạn',
    standard: 'Chế độ tiêu chuẩn',
  };

  const [active, setActive] = useState(false);

  function checkActive() {
    const arr = props.value;
    return arr.includes(listFormatStr[props.icon]);
  }

  useEffect(() => {
    setActive(checkActive());
  }, [props.value]);

  return (
    <div
      data-tooltip-id="tooltip"
      data-tooltip-content={listFormatStrDisplay[props.icon]}
      data-tooltip-place="top-start"
      onClick={() => {
        props.setValue([listFormatStr[props.icon]]);
        setActive(!active);
      }}
      className={`active:bg-gray-500 relative flex 2xl:w-12 2xl:h-12 w-10 h-10 justify-center items-center rounded-full border ${
        active ? 'bg-gray-600/[.8] border-yellow-500' : 'bg-gray-600/[.3] border-gray-500'
      }  hover:bg-gray-500/[.8] hover:cursor-pointer`}
    >
      {/* {active ? <FontAwesomeIcon icon={faCheck} className="absolute -right-0.5 -top-0.5 text-green-600" /> : <></>} */}
      <div className="w-8 h-8">
        <Image src={listIcon[props.icon]} alt="icon-regions" />
      </div>
    </div>
  );
}
