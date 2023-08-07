import MiniCard from '@/components/atoms/DeckItem/MiniCard';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ICardInDeck } from '@/interface/cardInDeck';

interface Props {
  deck: ICardInDeck[];
  setDeck: Dispatch<SetStateAction<ICardInDeck[]>>;
}

export default function ListCardDeck(props: Props) {
  const [data, setData] = useState<ICardInDeck[]>([]);

  useEffect(() => {
    setData(props.deck);
  }, [props.deck]);

  return (
    <div className="h-full w-full rounded-lg border border-gray-500 overflow-scroll no-scrollbar p-1">
      {data.map((node, i) => {
        return <MiniCard name={node.name} key={i} cost={node.cost} count={node.count} color={node.color} img={node.img} />;
      })}
    </div>
  );
}
