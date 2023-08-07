import Counter from '@/components/atoms/DeckItem/Counter';
import FaIconCircleButton from '@/components/atoms/buttons/FaIconCircleButton';
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
import { operator } from '@/constants/filterOperator';
import { ICardInDeck } from '@/interface/cardInDeck';
import { Filter } from '@/interface/filter';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MainBody() {
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [subtypes, setSubtypes] = useState('');
  const [rarity, setRarity] = useState<string[]>([]);
  const [type, setType] = useState<string[]>([]);
  const [cost, setCost] = useState<number[]>([]);
  const [format, setFormat] = useState<string[]>([]);
  const [region, setRegion] = useState<string[]>([]);
  const [deck, setDeck] = useState<ICardInDeck[]>([]);
  const [counter, setCounter] = useState({ champion: 0, unit: 0, spell: 0, landmark: 0, equipment: 0, all: 0 });

  useEffect(() => {
    async function load() {
      const filter: Filter[] = [];
      if (name != '') {
        filter.push({
          prop: 'name',
          operator: operator.iLike,
          value: name,
        });
      }

      if (subtypes != '') {
        filter.push({
          prop: 'subtypes',
          operator: operator.contains,
          value: [subtypes],
        });
      }

      if (rarity.length > 0) {
        filter.push({
          prop: 'rarityRef',
          operator: operator.in,
          value: rarity,
        });
      }

      if (type.length > 0) {
        filter.push({
          prop: 'type',
          operator: operator.in,
          value: type,
        });
      }

      if (cost.length > 0) {
        filter.push({
          prop: 'cost',
          operator: operator.in,
          value: cost,
        });
      }

      if (format.length > 0) {
        filter.push({
          prop: 'formatRefs',
          operator: operator.orContains,
          value: format,
        });
      }

      if (region.length > 0) {
        filter.push({
          prop: 'regionRefs',
          operator: operator.orContains,
          value: region,
        });
      }

      const strFilter = JSON.stringify(filter);
      const res = await axios.get(`${backendUrl}/api/cards?limit=20&start=0&order=[{"prop":"cost","direction":"asc"},{"prop":"name","direction":"asc"}]&filter=${strFilter}`);
      setCards(res.data.rows);
      setCount(res.data.count);
    }

    load();
  }, [name, subtypes, rarity, type, cost, format, region]);

  function clearFilter() {
    setName('');
    setSubtypes('');
    setRarity([]);
    setType([]);
    setCost([]);
    setFormat([]);
    setRegion([]);
  }

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
                <ListCardDeck deck={deck} setDeck={setDeck} />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-9/12">
          <div className="py-6 h-full w-full flex flex-col">
            {/* Filter */}
            <div className="flex">
              <InputSearchCard value={name} setValue={setName} />
              <div className="ml-4">
                <RegionCircleBtnList value={region} setValue={setRegion} />
              </div>
            </div>
            <div className="flex mt-2">
              <SubtypeSelect value={subtypes} setValue={setSubtypes} />
              <div className="ml-4">
                <ManaFilterBtnList value={cost} setValue={setCost} />
              </div>
            </div>
            <div className="flex mt-2">
              <RarityBtnList value={rarity} setValue={setRarity} />
              <div className="ml-16">
                <CardTypeCircleBtnList value={type} setValue={setType} />
              </div>
              <div className="ml-14">
                <FormatCircleBtnList value={format} setValue={setFormat} />
              </div>
              <div className="ml-14 flex items-end">
                <div className="h-fit ">
                  <span className="text-sm text-gray-300"></span>
                  <div className="flex items-center gap-2">
                    <FaIconCircleButton tooltipMsg="Xóa bộ lọc" icon={faTrash} onClick={clearFilter} />
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="mt-5 flex-1 flex overflow-hidden w-4/5 border-y border-gray-400 py-0.5">
              <CardList count={count} cards={cards} name={name} subtypes={subtypes} rarity={rarity} type={type} cost={cost} format={format} region={region} deck={deck} setDeck={setDeck} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
