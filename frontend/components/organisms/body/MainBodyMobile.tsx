import Counter from '@/components/atoms/DeckItem/Counter';
import FaIconButton from '@/components/atoms/buttons/FaIconButton';
import useWindowSize from '@/components/atoms/hooks/useWindowSize';
import InputSearchCard from '@/components/atoms/input/InputSearchCard';
import SubtypeSelect from '@/components/atoms/select/SubtypeSelect';
import CardList from '@/components/molecules/mainBody/CardList';
import CardTypeCircleBtnList from '@/components/molecules/mainBody/CardTypeCircleBtnList';
import CounterChart from '@/components/molecules/mainBody/CounterChart';
import FormatCircleBtnList from '@/components/molecules/mainBody/FormatCircleBtnList';
import ListCardDeck from '@/components/molecules/mainBody/ListCardDeck';
import ManaFilterBtnList from '@/components/molecules/mainBody/ManaFilterBtnList';
import ModalSaveDeck from '@/components/molecules/mainBody/ModalSaveDeck';
import RarityBtnList from '@/components/molecules/mainBody/RarityBtnList';
import RegionCircleBtnList from '@/components/molecules/mainBody/RegionCircleBtnList';
import TabMobile from '@/components/molecules/mainBodyMobile/TabMobile';
import { backendUrl } from '@/constants/env';
import { operator } from '@/constants/filterOperator';
import { defaultCard } from '@/interface/card';
import { ICardInDeck } from '@/interface/cardInDeck';
import { ICounter, defaultCounter } from '@/interface/counter';
import { IDeckInfo } from '@/interface/deckInfo';
import { Filter } from '@/interface/filter';
import { IManaCounter, defaultManaCounter } from '@/interface/manaCounter';
import { faFloppyDisk, faScrewdriverWrench, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function MainBodyMobile() {
  const [tab, setTab] = useState<'cards' | 'deck'>('cards');
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [limit, setLimit] = useState(20);
  const [subtypes, setSubtypes] = useState('');
  const [rarity, setRarity] = useState<string[]>([]);
  const [type, setType] = useState<string[]>([]);
  const [cost, setCost] = useState<number[]>([]);
  const [format, setFormat] = useState<string[]>(['client_Formats_Standard_name']);
  const [region, setRegion] = useState<string[]>([]);
  const [deck, setDeck] = useState<ICardInDeck[]>([]);
  const [counter, setCounter] = useState<ICounter>(defaultCounter());
  const [manaCounter, setManaCounter] = useState<IManaCounter>(defaultManaCounter());
  const [deckInfo, setDeckInfo] = useState<IDeckInfo>({ regions: [], mainCard: defaultCard(), champions: [] });
  const [showModal, setShowModal] = useState(false);
  const [generatingDeckcode, setGeneratingDeckcode] = useState(false);
  const [toggleSideFilter, setToggleSideFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const size = useWindowSize();

  function onChangeTab(value: 'cards' | 'deck') {
    if (tab != value) {
      setTab(value);
    }
  }

  useEffect(() => {
    async function load() {
      const filter: Filter[] = [];
      let limitGet = limit;
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

      switch (true) {
        case size.width < 1024 && size.width >= 768: {
          limitGet = 21;
          setLimit(21);
          break;
        }
        default:
          break;
      }

      const strFilter = JSON.stringify(filter);
      const res = await axios.get(`${backendUrl}/api/cards?limit=${limitGet}&start=0&order=[{"prop":"cost","direction":"asc"},{"prop":"name","direction":"asc"}]&filter=${strFilter}`);
      setCards(res.data.rows);
      setCount(res.data.count);
    }

    setLoading(true);
    load();
    setTimeout(() => setLoading(false), 200);
  }, [name, subtypes, rarity, type, cost, format, region]);

  useEffect(() => {
    if (deckInfo.regions.length == 2 || deckInfo.regions.length == 0) {
      setRegion(deckInfo.regions);
    }
  }, [deckInfo]);

  function clearFilter() {
    setName('');
    setSubtypes('');
    setRarity([]);
    setType([]);
    setCost([]);
    setFormat([]);
    setRegion([]);
  }

  function clearDeck() {
    setDeck([]);
    setCounter(defaultCounter());
    setManaCounter(defaultManaCounter());
    setDeckInfo({ regions: [], mainCard: defaultCard(), champions: [] });
  }

  async function getDeckcode() {
    setLoadingModal(true);
    setGeneratingDeckcode(true);
    setShowModal(true);
    const res = await axios.post(`${backendUrl}/api/decks/deckCode`, { deck });
    setDeckInfo({ ...deckInfo, deckcode: res.data.deckCode });
    setGeneratingDeckcode(false);
    setTimeout(() => setLoadingModal(false), 400);
  }

  return (
    <div className=" absolute h-full w-full flex">
      <div className="absolute -z-20 bg-[url('https://dd.b.pvp.net/4_7_0/set1/vi_vn/img/cards/01DE012T1-full.png')] h-full w-full bg-cover"></div>
      <div className="absolute bg-gray-800/[.6] -z-10 h-full w-full"></div>
      <div className="flex flex-col w-full h-full">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <div className="flex -mb-px justify-between">
            <TabMobile active={tab == 'deck'} text="Bộ bài" onChangeTab={onChangeTab} tab="deck" count={counter.all} />
            <TabMobile active={tab == 'cards'} text="Danh sách thẻ bài" onChangeTab={onChangeTab} tab="cards" count={counter.all} />
          </div>
        </div>
        <div className="w-full flex flex-col flex-1 overflow-hidden">
          {tab == 'cards' ? (
            <div className="overflow-hidden flex relative justify-center">
              {/* Card */}
              <div className="xl:mt-5 mt-2 flex md:w-4/5 w-10/12 md:border-y border-y-0 border-gray-400 py-0.5   ">
                {loading ? (
                  <div className="absolute h-full w-full bg-gray-800/[.4] z-40 flex justify-center items-center">
                    <span className="loader"></span>
                  </div>
                ) : null}

                <CardList
                  limit={limit}
                  count={count}
                  cards={cards}
                  name={name}
                  subtypes={subtypes}
                  rarity={rarity}
                  type={type}
                  cost={cost}
                  format={format}
                  region={region}
                  deck={deck}
                  setDeck={setDeck}
                  counter={counter}
                  setCounter={setCounter}
                  manaCounter={manaCounter}
                  setManaCounter={setManaCounter}
                  deckInfo={deckInfo}
                  setDeckInfo={setDeckInfo}
                />
              </div>

              {/* MiniFilter */}
              <div className="absolute right-0 top-0 flex z-50 h-full">
                {toggleSideFilter ? null : (
                  <div
                    onClick={() => setToggleSideFilter(true)}
                    className="xl:hidden flex bg-gray-600 p-2 pl-4 rounded-l-xl h-fit active:bg-gray-500 bg-gray-600/[.3] border border-r-0 border-gray-500 hover:bg-gray-500/[.8] hover:cursor-pointer"
                  >
                    <div className="lg:block hidden">
                      <FontAwesomeIcon icon={faScrewdriverWrench} color="white" />
                    </div>
                    <span className="ml-2">Bộ lọc</span>
                  </div>
                )}
                <div
                  className={`h-full bg-gray-900/[.9] xl:hidden transition-[width] duration-300 border-gray-700 overflow-y-scroll overflow-hidden ${
                    toggleSideFilter ? 'w-80 p-2 py-4 border border-r-0' : 'w-0'
                  }`}
                >
                  {toggleSideFilter ? (
                    <>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faScrewdriverWrench} size="lg" color="#D1D5DA" />
                          <span className="ml-2 text-lg font-bold text-gray-300">Bộ lọc</span>
                        </div>
                        <div className="flex">
                          <button type="button" className="bg-transparent hover:rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600" onClick={() => clearFilter()}>
                            <FontAwesomeIcon icon={faTrash} color="#D1D5DA" />
                          </button>
                          <button
                            type="button"
                            className="bg-transparent hover:rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600"
                            onClick={() => setToggleSideFilter(false)}
                          >
                            <FontAwesomeIcon icon={faXmark} size="xl" color="#D1D5DA" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-sm text-gray-300">Tìm kiếm:</span>
                        <InputSearchCard value={name} setValue={setName} />
                      </div>
                      <div className="mt-4">
                        <SubtypeSelect value={subtypes} setValue={setSubtypes} />
                      </div>
                      <div className="mt-2">
                        <span className="text-sm text-gray-300">Khu vực:</span>
                        <RegionCircleBtnList value={region} setValue={setRegion} deckInfo={deckInfo} />
                      </div>
                      <div className="mt-2">
                        <ManaFilterBtnList value={cost} setValue={setCost} />
                      </div>
                      <div className="mt-2">
                        <RarityBtnList value={rarity} setValue={setRarity} />
                      </div>
                      <div className="mt-2 -ml-2">
                        <CardTypeCircleBtnList value={type} setValue={setType} />
                      </div>
                      <div className="mt-2">
                        <FormatCircleBtnList value={format} setValue={setFormat} />
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          ) : (
            <div className="px-4 py-6 w-full h-full ">
              <div className="bg-gray-800/[.8] w-full h-full rounded-lg flex flex-col">
                <div className="flex px-4 py-4 text-2xl font-semibold">
                  <div className=" min-w-fit">
                    <span className="text-white mr-4">Bộ bài</span>
                  </div>
                  <div className="flex justify-end basis-full">
                    <FaIconButton icon={faFloppyDisk} size="sm" w="w-8" h="h-8" tooltipMsg="Lưu bộ bài" onClick={() => getDeckcode()} disable={counter.all < 40} />
                    <FaIconButton icon={faTrash} size="sm" w="w-8" h="h-8" tooltipMsg="Bỏ toàn bộ lá bài" onClick={clearDeck} disable={counter.all == 0} />
                  </div>
                </div>
                <div className="flex px-4 justify-between">
                  <Counter num={counter.champion} total={6} type="champion" />
                  <Counter num={counter.unit} type="unit" />
                  <Counter num={counter.spell} type="spell" />
                  <Counter num={counter.landmark} type="landmark" />
                  <Counter num={counter.equipment} type="equipment" />
                  <Counter num={counter.all} total={40} type="card" />
                </div>
                <div className="flex px-4 mt-4 justify-between h-fit">
                  <CounterChart value={manaCounter} setValue={setManaCounter} />
                </div>
                <div className="flex px-4 py-4 justify-between flex-1 overflow-hidden">
                  <ListCardDeck
                    deck={deck}
                    setDeck={setDeck}
                    counter={counter}
                    setCounter={setCounter}
                    manaCounter={manaCounter}
                    setManaCounter={setManaCounter}
                    deckInfo={deckInfo}
                    setDeckInfo={setDeckInfo}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        {showModal ? <ModalSaveDeck loading={loadingModal} setShowModal={setShowModal} generatingDeckcode={generatingDeckcode} deckInfo={deckInfo} /> : null}
      </div>
    </div>
  );
}
