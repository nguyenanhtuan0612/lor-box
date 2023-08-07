import equipment from '@/public/img/svg/icon-equipment.svg';
import landmark from '@/public/img/svg/icon-landmark.svg';
import spell from '@/public/img/svg/icon-spell.svg';
import unit from '@/public/img/svg/icon-unit.svg';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

interface Props {
  icon: 'equipment' | 'spell' | 'unit' | 'landmark';
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
}

export default function CardTyeCircleButton(props: Props) {
  const listIcon = {
    equipment,
    spell,
    unit,
    landmark,
  };

  const listTypeStr = {
    equipment: 'Trang Bị',
    spell: 'Bài phép',
    unit: 'Bài quân',
    landmark: 'Địa Danh',
  };

  const [active, setActive] = useState(false);

  function checkActive() {
    const arr = props.value;
    return arr.includes(listTypeStr[props.icon]);
  }

  useEffect(() => {
    setActive(checkActive());
  }, [props.value]);

  return (
    <div
      data-tooltip-id="tooltip"
      data-tooltip-content={listTypeStr[props.icon]}
      data-tooltip-place="top-start"
      onClick={() => {
        const arr = props.value;
        if (active) {
          const index = arr.indexOf(listTypeStr[props.icon]);
          if (index !== -1) {
            const temp = arr.filter(function (e) {
              return e !== listTypeStr[props.icon];
            });
            props.setValue(temp);
          }
        } else {
          props.setValue([...arr, listTypeStr[props.icon]]);
        }
        setActive(!active);
      }}
      className={`active:bg-gray-500 relative flex w-10 h-10 justify-center items-center rounded-full border ${
        active ? 'bg-gray-600/[.8] border-yellow-200' : 'bg-gray-600/[.3] border-gray-500'
      }  hover:bg-gray-500/[.8]`}
    >
      {active ? <FontAwesomeIcon icon={faCheck} className="absolute -right-0.5 -top-0.5 text-green-600" /> : <></>}
      <Image src={listIcon[props.icon]} alt="icon-regions" height={28} />
      <Tooltip id="tooltip" style={{ backgroundColor: 'rgb(75 85 99 / .8)', color: 'white', padding: '4px 8px', fontSize: '14px' }} />
    </div>
  );
}
