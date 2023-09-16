import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import placeHolder from '@/public/img/card-placeholder.png';
import { ICardInDeck } from '@/interface/cardInDeck';
import { ICard } from '@/interface/card';
import _ from 'lodash';
import { ICounter } from '@/interface/counter';
import { IManaCounter } from '@/interface/manaCounter';
import { IDeckInfo } from '@/interface/deckInfo';

interface Props {
  card: ICard;
  deck: ICardInDeck[];
  setDeck: Dispatch<SetStateAction<ICardInDeck[]>>;
  listCard: ICard[];
  counter: ICounter;
  setCounter: Dispatch<SetStateAction<ICounter>>;
  manaCounter: IManaCounter;
  setManaCounter: Dispatch<SetStateAction<IManaCounter>>;
  deckInfo: IDeckInfo;
  setDeckInfo: Dispatch<SetStateAction<IDeckInfo>>;
  disableNum?: number;
}

export default function Card(props: Props) {
  const [numInDeck, setNumInDeck] = useState(0);

  useEffect(() => {
    const arr = props.deck;
    const thisCard = _.find(arr, { cardCode: props.card?.cardCode });
    thisCard ? setNumInDeck(thisCard.count) : setNumInDeck(0);
  }, [props.deck, props.listCard]);

  const numRingInDeck = () => {
    switch (numInDeck) {
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

  const listRegionRef = {
    iconAll: 'All',
    iconBandlecity: 'BandleCity',
    iconBilgewater: 'Bilgewater',
    iconDemacia: 'Demacia',
    iconFreljord: 'Freljord',
    iconIonia: 'Ionia',
    iconNoxus: 'Noxus',
    iconPiltoverzaun: 'PiltoverZaun',
    iconRuneterra: 'Runeterra',
    iconShadowisles: 'ShadowIsles',
    iconShurima: 'Shurima',
    iconTargon: 'Targon',
  };

  function getColorRegion(region: string) {
    switch (region) {
      case listRegionRef.iconBandlecity: {
        return '#BEC43D';
      }
      case listRegionRef.iconBilgewater: {
        return '#A64B2E';
      }
      case listRegionRef.iconDemacia: {
        return '#B8B09A';
      }
      case listRegionRef.iconFreljord: {
        return '#5CB8D6';
      }
      case listRegionRef.iconIonia: {
        return '#BB607E';
      }
      case listRegionRef.iconNoxus: {
        return '#92242A';
      }
      case listRegionRef.iconPiltoverzaun: {
        return '#C97D5B';
      }
      case listRegionRef.iconRuneterra: {
        return '#68522B';
      }
      case listRegionRef.iconShadowisles: {
        return '#0C7552';
      }
      case listRegionRef.iconShurima: {
        return '#D4C861';
      }
      default: {
        return '#4128D9';
      }
    }
  }

  const listTypeStr = {
    equipment: 'Trang Bị',
    spell: 'Bài phép',
    unit: 'Bài quân',
    landmark: 'Địa Danh',
  };

  function counterCard() {
    const data = props.counter;
    data.all += 1;

    if (props.card?.rarityRef == 'Champion') {
      data.champion += 1;
    }
    switch (props.card?.type) {
      case listTypeStr.unit: {
        data.unit += 1;
        break;
      }
      case listTypeStr.spell: {
        data.spell += 1;
        break;
      }
      case listTypeStr.landmark: {
        data.landmark += 1;
        break;
      }
      case listTypeStr.equipment: {
        data.equipment += 1;
        break;
      }
      default: {
        data.unit += 1;
        break;
      }
    }
    props.setCounter(data);
  }

  function getNewDeckInfo(arr: ICardInDeck[]) {
    let mainCard = null;
    let mainChampion = null;
    let mainUnit = null;

    const champions: string[] = [];
    for (const iterator of arr) {
      if (iterator.card.rarityRef == 'Champion') {
        champions.push(iterator.card.name);
        mainChampion = iterator.card;
      } else if (iterator.card.type == 'Bài quân') {
        mainUnit = iterator.card;
      } else {
        mainCard = iterator.card;
      }
    }

    const finalMaincard = mainChampion || mainUnit || mainCard;

    props.setDeckInfo({ mainCard: finalMaincard, champions: champions, regions: _.uniq([...props.deckInfo?.regions, ...props.card?.regionRefs]) });
  }

  function counterMana() {
    const data = props.manaCounter;

    switch (props.card?.cost) {
      case 0: {
        data.zero += 1;
        data.max = data.zero > data.max ? data.zero : data.max;
        break;
      }
      case 1: {
        data.one += 1;
        data.max = data.one > data.max ? data.one : data.max;
        break;
      }
      case 2: {
        data.two += 1;
        data.max = data.two > data.max ? data.two : data.max;
        break;
      }
      case 3: {
        data.three += 1;
        data.max = data.three > data.max ? data.three : data.max;
        break;
      }
      case 4: {
        data.four += 1;
        data.max = data.four > data.max ? data.four : data.max;
        break;
      }
      case 5: {
        data.five += 1;
        data.max = data.five > data.max ? data.five : data.max;
        break;
      }
      case 6: {
        data.six += 1;
        data.max = data.six > data.max ? data.six : data.max;
        break;
      }
      case 7: {
        data.seven += 1;
        data.max = data.seven > data.max ? data.seven : data.max;
        break;
      }
      case 8: {
        data.eight += 1;
        data.max = data.eight > data.max ? data.eight : data.max;
        break;
      }
      case 9: {
        data.nine += 1;
        data.max = data.nine > data.max ? data.nine : data.max;
        break;
      }
      default: {
        data.more += 1;
        data.max = data.more > data.max ? data.more : data.max;
        break;
      }
    }

    props.setManaCounter(data);
  }

  function checkCanAdd() {
    let result = true;
    if (numInDeck == 3) {
      result = false;
    }
    if (props.counter?.all == 40) {
      result = false;
    }
    if (props.counter?.champion == 6 && props.card?.rarityRef == 'Champion') {
      result = false;
    }
    const newRegions = _.uniq([...props.deckInfo?.regions, ...props.card?.regionRefs]);
    if (newRegions.length > 2) {
      result = false;
    }

    return result;
  }

  function handleClickAddCard() {
    const arr = props.deck;

    if (numInDeck == 0) {
      const newArr = [
        ...arr,
        {
          cardCode: props.card?.cardCode,
          card: props.card,
          count: numInDeck + 1,
          color: getColorRegion(props.card?.regionRefs[0] || 'default'), //'#E29E76';
          cost: props.card.cost,
          name: props.card.name,
        },
      ];
      const sort = _.sortBy(newArr, ['cost', 'name']);
      props.setDeck(sort);
      getNewDeckInfo(sort);
      counterMana();
      counterCard();
      setNumInDeck(numInDeck + 1);
    } else {
      const newArr = [];
      for (const iterator of arr) {
        if (iterator.card?.cardCode == props.card?.cardCode) {
          iterator.count += 1;
        }
        newArr.push(iterator);
      }
      props.setDeck(newArr);
      counterMana();
      counterCard();
      setNumInDeck(numInDeck + 1);
    }
  }

  return (
    <div className="w-full mx-0.5">
      <div className="relative">
        <Image
          onClick={() => {
            if (checkCanAdd()) {
              handleClickAddCard();
            }
          }}
          src={props.card?.gameAbsolutePath}
          className={checkCanAdd() ? `hover:scale-105 hover:cursor-pointer` : 'opacity-50'}
          width={0}
          height={0}
          alt="card"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          placeholder="blur"
          blurDataURL="/img/card-placeholder.png"
        />
      </div>
      {numRingInDeck()}
    </div>
  );
}
