import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import placeHolder from '@/public/img/card-placeholder.png';
import { ICardInDeck } from '@/interface/cardInDeck';
import { ICard } from '@/interface/card';
import _ from 'lodash';

interface Props {
  card: ICard;
  deck: ICardInDeck[];
  setDeck: Dispatch<SetStateAction<ICardInDeck[]>>;
  listCard: ICard[];
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

  function handleClickAddCard() {
    const arr = props.deck;

    if (numInDeck == 0) {
      props.setDeck([
        ...arr,
        {
          cardCode: props.card?.cardCode,
          count: numInDeck + 1,
          name: props.card.name,
          cost: props.card.cost,
          img: props.card.fullAbsolutePath,
          color: getColorRegion(props.card?.regionRefs[0] || 'default'), //'#E29E76';
        },
      ]);
      setNumInDeck(numInDeck + 1);
    } else {
      const newArr = [];
      for (const iterator of arr) {
        if (iterator.cardCode == props.card?.cardCode) {
          iterator.count += 1;
        }
        newArr.push(iterator);
      }
      props.setDeck(newArr);
      setNumInDeck(numInDeck + 1);
    }
  }

  return (
    <div className="w-full mx-0.5">
      <div className="relative">
        <Image
          onClick={() => {
            if (numInDeck < 3) {
              handleClickAddCard();
            }
          }}
          src={props.card?.gameAbsolutePath}
          className={numInDeck < 3 ? `hover:scale-105 hover:cursor-pointer` : 'opacity-50'}
          width={0}
          height={0}
          alt="card"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      {numRingInDeck()}
    </div>
  );
}
