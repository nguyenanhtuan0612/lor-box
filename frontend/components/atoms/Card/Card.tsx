import Image from 'next/image';
import React, { useState } from 'react';
import placeHolder from '@/public/img/card-placeholder.png';

interface Props {
  img: string;
  numInDeck: 0 | 1 | 2 | 3;
}

export default function Card(props: Props) {
  const [loaded, setLoaded] = useState(false);

  const numRingInDeck = () => {
    switch (props.numInDeck) {
      case 1: {
        return (
          <div className="flex justify-center items-center gap-1 mb-1">
            <div className="rounded-full border border-yellow-500 bg-yellow-400 w-2 h-2"></div>
            <div className="rounded-full border border-yellow-500 bg-gray-600/[.3] w-2 h-2"></div>
            <div className="rounded-full border border-yellow-500 bg-gray-600/[.3] w-2 h-2"></div>
          </div>
        );
      }
      case 2: {
        return (
          <div className="flex justify-center items-center gap-1 mb-1">
            <div className="rounded-full border border-yellow-500 bg-yellow-400 w-2 h-2"></div>
            <div className="rounded-full border border-yellow-500 bg-yellow-400 w-2 h-2"></div>
            <div className="rounded-full border border-yellow-500 bg-gray-600/[.3] w-2 h-2"></div>
          </div>
        );
      }
      case 3: {
        return (
          <div className="flex justify-center items-center gap-1 mb-1">
            <div className="rounded-full border border-yellow-500 bg-yellow-400 w-2 h-2"></div>
            <div className="rounded-full border border-yellow-500 bg-yellow-400 w-2 h-2"></div>
            <div className="rounded-full border border-yellow-500 bg-yellow-400 w-2 h-2"></div>
          </div>
        );
      }
      default: {
        return (
          <div className="flex justify-center items-center gap-1 mb-1">
            <div className="rounded-full border border-yellow-500 bg-gray-600/[.3] w-2 h-2"></div>
            <div className="rounded-full border border-yellow-500 bg-gray-600/[.3] w-2 h-2"></div>
            <div className="rounded-full border border-yellow-500 bg-gray-600/[.3] w-2 h-2"></div>
          </div>
        );
      }
    }
  };

  return (
    <div className="w-full mx-0.5">
      <div className="relative">
        <Image src={props.img} className={`hover:scale-105 hover:cursor-pointer`} width={0} height={0} alt="card" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      </div>
      {numRingInDeck()}
    </div>
  );
}
