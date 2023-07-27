import Deck from '@/components/molecules/mainBody/Deck';
import Image from 'next/image';
import React from 'react';

export default function MainBody() {
  return (
    <div className="-z-20 absolute bg-[url('https://dd.b.pvp.net/4_7_0/set1/vi_vn/img/cards/01DE012T1-full.png')] h-full w-full bg-cover">
      <div className="bg-gray-800/[.6] h-full w-full pl-14 flex">
        <div className=" w-3/12">
          <Deck />
        </div>
        <div className=" w-9/12">
          <div>filter</div>
          <div>card</div>
        </div>
      </div>
    </div>
  );
}
