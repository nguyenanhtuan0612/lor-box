import Counter from '@/components/atoms/DeckItem/Counter';
import InputSearchCard from '@/components/atoms/input/InputSearchCard';
import SubtypeSelect from '@/components/atoms/select/SubtypeSelect';
import CardList from '@/components/molecules/mainBody/CardList';
import CardTypeCircleBtnList from '@/components/molecules/mainBody/CardTypeCircleBtnList';
import CounterChart from '@/components/molecules/mainBody/CounterChart';
import FormatCircleBtnList from '@/components/molecules/mainBody/FormatCircleBtnList';
import ListCardDeck from '@/components/molecules/mainBody/ListCardDeck';
import ManaFilterBtnList from '@/components/molecules/mainBody/ManaFilterBtnList';
import RarityBtnList from '@/components/molecules/mainBody/RarityBtnList';
import RegionCircleBtnList from '@/components/molecules/mainBody/RegionCircleBtnList';
import { backendUrl } from '@/constants/env';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MainBody() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await axios.get(`${backendUrl}/api/cards?limit=20&start=0&order=[{"prop":"cost","direction":"asc"},{"prop":"name","direction":"asc"}]`);
      setCards(res.data.rows);
    }

    load();
  }, []);

  return (
    <div className=" absolute h-full w-full">
      <div className="absolute -z-20 bg-[url('https://dd.b.pvp.net/4_7_0/set1/vi_vn/img/cards/01DE012T1-full.png')] h-full w-full bg-cover"></div>
      <div className="absolute bg-gray-800/[.6] -z-10 h-full w-full"></div>
      <div className="h-full w-full pl-14 flex">
        <div className=" w-3/12">
          <div className="px-4 py-6 w-full h-full ">
            <div className="bg-gray-800/[.8] w-full h-full rounded-lg flex flex-col">
              <div className="flex px-4 py-4 text-2xl font-semibold">
                <span className="text-white">Bộ bài</span>
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
          <div className="py-6 h-full w-full flex flex-col">
            {/* Filter */}
            <div className="flex">
              <InputSearchCard />
              <div className="ml-4">
                <RegionCircleBtnList />
              </div>
            </div>
            <div className="flex mt-2">
              <SubtypeSelect />
              <div className="ml-4">
                <ManaFilterBtnList />
              </div>
            </div>
            <div className="flex mt-2">
              <RarityBtnList />
              <div className="ml-16">
                <CardTypeCircleBtnList />
              </div>
              <div className="ml-14">
                <FormatCircleBtnList />
              </div>
            </div>
            {/* Card */}
            <div className="mt-5 flex-1 flex overflow-hidden w-4/5 border-y border-gray-400 py-0.5">
              <CardList cards={cards} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
