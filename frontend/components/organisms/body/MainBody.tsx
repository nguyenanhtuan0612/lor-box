import Counter from '@/components/atoms/DeckItem/Counter';
import CounterChart from '@/components/molecules/mainBody/CounterChart';
import ListCardDeck from '@/components/molecules/mainBody/ListCardDeck';
import React from 'react';

export default function MainBody() {
  return (
    <div className=" absolute h-full w-full">
      <div className="absolute -z-20 bg-[url('https://dd.b.pvp.net/4_7_0/set1/vi_vn/img/cards/01DE012T1-full.png')] h-full w-full bg-cover"></div>
      <div className="absolute bg-gray-800/[.6] -z-10 h-full w-full"></div>
      <div className="h-full w-full pl-14 flex">
        <div className=" w-3/12">
          <div className="px-4 py-6 w-full h-full ">
            <div className="bg-gray-800/[.8] w-full h-full rounded-lg flex flex-col">
              <div className="flex px-4 py-4 text-2xl font-semibold">
                <span>Bộ bài</span>
              </div>
              <div className="flex px-4 justify-between">
                <Counter num={0} total={2} type="champion" />
                <Counter num={0} type="unit" />
                <Counter num={0} type="spell" />
                <Counter num={0} type="landmark" />
                <Counter num={0} type="equipment" />
                <Counter num={0} total={40} type="card" />
              </div>
              <div className="flex px-4 mt-4 justify-between h-fit">
                <CounterChart />
              </div>
              <div className="flex px-4 py-4 justify-between flex-1 overflow-hidden">
                <ListCardDeck />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-9/12">
          <div>filter</div>
          <div>card</div>
        </div>
      </div>
    </div>
  );
}
