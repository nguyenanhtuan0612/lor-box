import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useState } from 'react';
import standard from '@/public/img/formats/queue_select_standard_toggle_active.png';
import eternal from '@/public/img/formats/queue_select_eternal_toggle_active.png';

interface Props {
  active: boolean;
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

  const [active, setActive] = useState(props.active);

  return (
    <div
      onClick={() => {
        const arr = props.value;
        if (active) {
          const index = arr.indexOf(listFormatStr[props.icon]);
          if (index !== -1) {
            const temp = arr.filter(function (e) {
              return e !== listFormatStr[props.icon];
            });
            props.setValue(temp);
          }
        } else {
          props.setValue([...arr, listFormatStr[props.icon]]);
        }
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
