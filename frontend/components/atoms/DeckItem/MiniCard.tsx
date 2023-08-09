import { ICard } from '@/interface/card';
import { ICardInDeck } from '@/interface/cardInDeck';
import { ICounter } from '@/interface/counter';
import { IDeckInfo } from '@/interface/deckInfo';
import { IManaCounter } from '@/interface/manaCounter';
import _ from 'lodash';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  cardCode: string;
  card: ICard;
  count: number;
  color: string;
  deck: ICardInDeck[];
  setDeck: Dispatch<SetStateAction<ICardInDeck[]>>;
  counter: ICounter;
  setCounter: Dispatch<SetStateAction<ICounter>>;
  manaCounter: IManaCounter;
  setManaCounter: Dispatch<SetStateAction<IManaCounter>>;
  deckInfo: IDeckInfo;
  setDeckInfo: Dispatch<SetStateAction<IDeckInfo>>;
}

export default function MiniCard(props: Props) {
  const listTypeStr = {
    equipment: 'Trang Bị',
    spell: 'Bài phép',
    unit: 'Bài quân',
    landmark: 'Địa Danh',
  };

  function counterCard() {
    const data = props.counter;
    data.all -= 1;

    if (props.card?.rarityRef == 'Champion') {
      data.champion -= 1;
    }
    switch (props.card?.type) {
      case listTypeStr.unit: {
        data.unit -= 1;
        break;
      }
      case listTypeStr.spell: {
        data.spell -= 1;
        break;
      }
      case listTypeStr.landmark: {
        data.landmark -= 1;
        break;
      }
      case listTypeStr.equipment: {
        data.equipment -= 1;
        break;
      }
      default: {
        data.unit -= 1;
        break;
      }
    }
    props.setCounter(data);
  }

  function counterMana() {
    const data = props.manaCounter;

    switch (props.card?.cost) {
      case 0: {
        data.zero -= 1;
        break;
      }
      case 1: {
        data.one -= 1;
        break;
      }
      case 2: {
        data.two -= 1;
        break;
      }
      case 3: {
        data.three -= 1;
        break;
      }
      case 4: {
        data.four -= 1;
        break;
      }
      case 5: {
        data.five -= 1;
        break;
      }
      case 6: {
        data.six -= 1;
        break;
      }
      case 7: {
        data.seven -= 1;
        break;
      }
      case 8: {
        data.eight -= 1;
        break;
      }
      case 9: {
        data.nine -= 1;
        break;
      }
      default: {
        data.more -= 1;
        break;
      }
    }
    data.max = 0;
    const keys = Object.keys(data);
    for (const iterator of keys) {
      if ((data as any)[iterator] > data.max) {
        data.max = (data as any)[iterator];
      }
    }

    props.setManaCounter(data);
  }

  function getNewDeckInfo(arr: ICardInDeck[]) {
    let mainCard = null;
    let mainChampion = null;

    const champions: string[] = [];
    let regions: string[] = [];
    for (const iterator of arr) {
      if (iterator.card.rarityRef == 'Champion') {
        champions.push(iterator.card.name);
        mainChampion = iterator.card;
      } else {
        mainCard = iterator.card;
        regions = regions.concat(iterator.card?.regionRefs);
      }
    }

    props.setDeckInfo({ mainCard: mainCard, champions: champions, regions: _.uniq(regions) });
  }

  function handleRemoveCard() {
    const arr = props.deck;
    const newCount = props.count - 1;
    if (newCount == 0) {
      const temp = arr.filter(function (e) {
        return e.cardCode !== props.cardCode;
      });
      counterMana();
      counterCard();
      props.setDeck(temp);
      getNewDeckInfo(temp);
    } else {
      const newArr = [];
      for (const iterator of arr) {
        if (iterator.cardCode == props.cardCode) {
          iterator.count = newCount;
        }
        newArr.push(iterator);
      }
      counterMana();
      counterCard();
      props.setDeck(newArr);
    }
  }

  return (
    <div
      onClick={() => {
        handleRemoveCard();
      }}
      className="hover:cursor-pointer h-10 w-full relative rounded-lg overflow-hidden first:mt-0 mt-0.5 border border-gray-300"
    >
      <div className="absolute h-full w-full">
        <div
          className={`absolute w-full h-full z-10`}
          style={{
            background: `linear-gradient(to right, ${props.color} 30%, ${props.color + '00'} 70%)`,
          }}
        ></div>
        <div className="flex h-full w-9/12 float-right justify-end items-center">
          <Image src={props.card?.fullAbsolutePath} alt="bg-mini-card" width={0} height={0} sizes="10vw" style={{ width: '100%', height: 'auto' }} className="" />
        </div>
      </div>

      <div className="flex items-center h-full w-full">
        <div className="text-xs ml-3 border cost-bg border-gray-700 shadow-lg rounded-full z-10 h-5 w-5 flex justify-center items-center">
          <span className="text-white">{props.card?.cost}</span>
        </div>
        <div className="ml-3 z-10 flex items-center">
          <span className="text-sm text-white">{props.card?.name}</span>
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
