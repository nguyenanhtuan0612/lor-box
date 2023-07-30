import Image from 'next/image';
import React from 'react';
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

interface Props {
  active: boolean;
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

  return (
    <div className={`relative flex w-10 h-10 justify-center items-center rounded-full border ${props.active ? 'bg-gray-500/[.8]' : 'bg-gray-500/[.3]'} border-gray-500 hover:bg-gray-500/[.8]`}>
      {props.active ? <FontAwesomeIcon icon={faCheck} className="absolute -right-0.5 -top-0.5 text-green-600" /> : <></>}
      <div className="w-8 h-8">
        <Image src={listIcon[props.icon]} alt="icon-regions" />
      </div>
    </div>
  );
}
