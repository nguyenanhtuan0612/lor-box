import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface Props {
  name: string;
  cost: number;
  count: number;
  img: string;
  color: string;
}

export default function MiniCard(props: Props) {
  return (
    <div className="h-10 w-full relative rounded-lg overflow-hidden first:mt-0 mt-0.5 border border-gray-300">
      <div className="absolute h-full w-full">
        <div
          className={`absolute w-full h-full z-10`}
          style={{
            background: `linear-gradient(to right, ${props.color} 30%, ${props.color + '00'} 70%)`,
          }}
        ></div>
        <div className="flex h-full w-9/12 float-right justify-end items-center">
          <Image src={props.img} alt="bg-mini-card" width={0} height={0} sizes="10vw" style={{ width: '100%', height: 'auto' }} className="" />
        </div>
      </div>

      <div className="flex items-center h-full w-full">
        <div className="text-xs ml-3 border cost-bg border-gray-700 shadow-lg rounded-full z-10 h-5 w-5 flex justify-center items-center">
          <span className="text-white">{props.cost}</span>
        </div>
        <div className="ml-3 z-10 flex items-center">
          <span className="text-sm text-white">{props.name}</span>
        </div>
        <div className="z-10 justify-center items-center flex-1 text-sm">
          <div className="bg-gray-900 border border-gray-500 float-right w-5 h-5 flex justify-center items-center mr-3">
            <span className="text-xs text-white">{props.count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
