import Card from '@/components/atoms/Card/Card';
import { backendUrl } from '@/constants/env';
import { ICard } from '@/interface/card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
  cards: ICard[];
}

export default function CardList(props: Props) {
  const [cards, setCards] = useState<ICard[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setCards(props.cards);
  }, [props.cards]);

  const getMorePost = async () => {
    const res = await axios.get(`${backendUrl}/api/cards?limit=20&start=${cards.length}&&order=[{"prop":"cost","direction":"asc"},{"prop":"name","direction":"asc"}]`);
    const newCards = await res.data.rows;
    setCards(cards.concat(newCards));
  };

  return (
    <div className="w-full no-scrollbar" style={{ overflowY: 'scroll' }} id="scrollableDiv">
      <InfiniteScroll
        className=" no-scrollbar py-0.5 grid grid-cols-5 gap-2"
        dataLength={cards.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
        scrollableTarget="scrollableDiv"
        scrollThreshold={0.95}
      >
        {cards.map((data, i) => {
          return <Card key={i} img={data.gameAbsolutePath} numInDeck={0} />;
        })}
      </InfiniteScroll>
    </div>
  );
}
