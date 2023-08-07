import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import iconAll from '@/public/img/regions/icon-all.png';
import iconBandlecity from '@/public/img/regions/icon-bandlecity.png';
import iconBilgewater from '@/public/img/regions/icon-bilgewater.png';
import iconDemacia from '@/public/img/regions/icon-demacia.png';
import iconFreljord from '@/public/img/regions/icon-freljord.png';
import iconIonia from '@/public/img/regions/icon-ionia.png';
import iconNoxus from '@/public/img/regions/icon-noxus.png';
import iconPiltoverzaun from '@/public/img/regions/icon-piltoverzaun.png';
import iconRuneterra from '@/public/img/regions/icon-runeterra.png';
import iconShadowisles from '@/public/img/regions/icon-shadowisles.png';
import iconShurima from '@/public/img/regions/icon-shurima.png';
import iconTargon from '@/public/img/regions/icon-targon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';

interface Props {
  icon:
    | 'iconAll'
    | 'iconBandlecity'
    | 'iconBilgewater'
    | 'iconDemacia'
    | 'iconFreljord'
    | 'iconIonia'
    | 'iconNoxus'
    | 'iconPiltoverzaun'
    | 'iconRuneterra'
    | 'iconShadowisles'
    | 'iconShurima'
    | 'iconTargon';
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
}

export default function RegionCircleButton(props: Props) {
  const listIcon = {
    iconAll,
    iconBandlecity,
    iconBilgewater,
    iconDemacia,
    iconFreljord,
    iconIonia,
    iconNoxus,
    iconPiltoverzaun,
    iconRuneterra,
    iconShadowisles,
    iconShurima,
    iconTargon,
  };
  const listRegionRef = {
    iconAll: 'All',
    iconBandlecity: 'BandleCity',
    iconBilgewater: 'Bilgewater',
    iconDemacia: 'Demacia',
    iconFreljord: 'Freljord',
    iconIonia: 'Ionia',
    iconNoxus: 'Noxus',
    iconPiltoverzaun: 'PiltoverZaun',
    iconRuneterra: 'Runeterra',
    iconShadowisles: 'ShadowIsles',
    iconShurima: 'Shurima',
    iconTargon: 'Targon',
  };

  const [active, setActive] = useState(false);

  function checkActive() {
    const arr = props.value;
    return arr.includes(listRegionRef[props.icon]);
  }

  useEffect(() => {
    setActive(checkActive());
  }, [props.value]);

  return (
    <div
      data-tooltip-id="tooltip"
      data-tooltip-content={listRegionRef[props.icon]}
      data-tooltip-place="top-start"
      onClick={() => {
        const arr = props.value;
        if (active) {
          const index = arr.indexOf(listRegionRef[props.icon]);
          if (index !== -1) {
            const temp = arr.filter(function (e) {
              return e !== listRegionRef[props.icon];
            });
            props.setValue(temp);
          }
        } else {
          props.setValue([...arr, listRegionRef[props.icon]]);
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
      <Tooltip id="tooltip" style={{ backgroundColor: 'rgb(75 85 99 / .8)', color: 'white', padding: '4px 8px', fontSize: '14px' }} />
    </div>
  );
}
