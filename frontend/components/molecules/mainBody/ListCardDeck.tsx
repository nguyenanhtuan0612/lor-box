import MiniCard from '@/components/atoms/DeckItem/MiniCard';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ICardInDeck } from '@/interface/cardInDeck';
import { ICounter } from '@/interface/counter';
import { IManaCounter } from '@/interface/manaCounter';
import { IDeckInfo } from '@/interface/deckInfo';

interface Props {
  deck: ICardInDeck[];
  setDeck: Dispatch<SetStateAction<ICardInDeck[]>>;
  counter: ICounter;
  setCounter: Dispatch<SetStateAction<ICounter>>;
  manaCounter: IManaCounter;
  setManaCounter: Dispatch<SetStateAction<IManaCounter>>;
  deckInfo: IDeckInfo;
  setDeckInfo: Dispatch<SetStateAction<IDeckInfo>>;
}

export default function ListCardDeck(props: Props) {
  const [data, setData] = useState<ICardInDeck[]>([]);

  useEffect(() => {
    setData(props.deck);
  }, [props.deck]);

  return (
    <div className="h-full w-full rounded-lg border border-gray-500 overflow-scroll no-scrollbar p-1">
      {data.map((node, i) => {
        return (
          <MiniCard
            deck={props.deck}
            setDeck={props.setDeck}
            cardCode={node.cardCode}
            card={node.card}
            key={i}
            count={node.count}
            color={node.color}
            counter={props.counter}
            setCounter={props.setCounter}
            manaCounter={props.manaCounter}
            setManaCounter={props.setManaCounter}
            deckInfo={props.deckInfo}
            setDeckInfo={props.setDeckInfo}
          />
        );
      })}
    </div>
  );
}
