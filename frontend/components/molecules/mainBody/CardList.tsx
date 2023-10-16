import Card from '@/components/atoms/Card/Card';
import { backendUrl } from '@/constants/env';
import { operator } from '@/constants/filterOperator';
import { ICard } from '@/interface/card';
import { ICardInDeck } from '@/interface/cardInDeck';
import { ICounter } from '@/interface/counter';
import { IDeckInfo } from '@/interface/deckInfo';
import { Filter } from '@/interface/filter';
import { IManaCounter } from '@/interface/manaCounter';
import axios from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
  cards: ICard[];
  count: number;
  name: string;
  subtypes: string;
  rarity: string[];
  type: string[];
  cost: number[];
  format: string[];
  region: string[];
  deck: ICardInDeck[];
  setDeck: Dispatch<SetStateAction<ICardInDeck[]>>;
  counter: ICounter;
  setCounter: Dispatch<SetStateAction<ICounter>>;
  manaCounter: IManaCounter;
  setManaCounter: Dispatch<SetStateAction<IManaCounter>>;
  deckInfo: IDeckInfo;
  setDeckInfo: Dispatch<SetStateAction<IDeckInfo>>;
  limit: number;
}

export default function CardList(props: Props) {
  const [cards, setCards] = useState<ICard[]>([]);
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [subtypes, setSubtypes] = useState('');
  const [rarity, setRarity] = useState<string[]>([]);
  const [type, setType] = useState<string[]>([]);
  const [cost, setCost] = useState<number[]>([]);
  const [format, setFormat] = useState<string[]>([]);
  const [region, setRegion] = useState<string[]>(['client_Formats_Standard_name']);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    setCards(props.cards);
    setCount(props.count);
    setName(props.name);
    setSubtypes(props.subtypes);
    setRarity(props.rarity);
    setType(props.type);
    setCost(props.cost);
    setFormat(props.format);
    setRegion(props.region);
    setLimit(props.limit);
  }, [props.cards]);

  const getMorePost = async () => {
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
    const res = await axios.get(`${backendUrl}/api/cards?limit=${limit}&start=${cards.length}&order=[{"prop":"cost","direction":"asc"},{"prop":"name","direction":"asc"}]&filter=${strFilter}`);
    const newCards = await res.data.rows;
    setCards(cards.concat(newCards));
  };

  return (
    <div className="w-full no-scrollbar" style={{ overflowY: 'scroll' }} id="scrollableDiv">
      {cards.length > 0 ? (
        <InfiniteScroll
          className=" no-scrollbar py-0.5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-2 grid-cols-3"
          dataLength={cards.length}
          next={getMorePost}
          hasMore={cards.length < count}
          loader={<h4></h4>}
          endMessage={<h4></h4>}
          scrollableTarget="scrollableDiv"
          scrollThreshold={0.95}
        >
          {cards.map((data, i) => {
            return (
              <Card
                key={data.id}
                card={data}
                deck={props.deck}
                setDeck={props.setDeck}
                listCard={cards}
                counter={props.counter}
                setCounter={props.setCounter}
                manaCounter={props.manaCounter}
                setManaCounter={props.setManaCounter}
                deckInfo={props.deckInfo}
                setDeckInfo={props.setDeckInfo}
              />
            );
          })}
        </InfiniteScroll>
      ) : (
        <h4></h4>
      )}
    </div>
  );
}
