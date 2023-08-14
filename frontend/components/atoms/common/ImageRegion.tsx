import Image from 'next/image';
import React from 'react';
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

interface Props {
  icon: 'Bandlecity' | 'Bilgewater' | 'Demacia' | 'Freljord' | 'Ionia' | 'Noxus' | 'Piltoverzaun' | 'Runeterra' | 'Shadowisles' | 'Shurima' | 'Targon' | string;
}

export default function ImageRegion(props: Props) {
  const listIcon = {
    BandleCity: iconBandlecity,
    Bilgewater: iconBilgewater,
    Demacia: iconDemacia,
    Freljord: iconFreljord,
    Ionia: iconIonia,
    Noxus: iconNoxus,
    PiltoverZaun: iconPiltoverzaun,
    Runeterra: iconRuneterra,
    ShadowIsles: iconShadowisles,
    Shurima: iconShurima,
    Targon: iconTargon,
  };

  return (
    <div className="w-10 h-10">
      <Image src={(listIcon as any)[props.icon]} alt="icon-regions" />
    </div>
  );
}
