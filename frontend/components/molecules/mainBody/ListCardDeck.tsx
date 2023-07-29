import MiniCard from '@/components/atoms/DeckItem/MiniCard';
import React from 'react';
import bg from '@/public/img/01PZ027.png';
import { count } from 'console';

const data = [
  { name: 'Chùm Sáng Nhiệt Năng', cost: 1, count: 2, img: bg, color: '#E29E76' },
  { name: 'Temmo', cost: 1, count: 2, img: bg, color: '#E29E76' },
  { name: 'Phát Bắn Thần Bí', cost: 1, count: 2, img: bg, color: '#E29E76' },
  { name: 'Cầu Sấm', cost: 6, count: 2, img: bg, color: '#E29E76' },
  { name: 'Temmo', cost: 1, count: 2, img: bg, color: '#E29E76' },
  { name: 'Temmo', cost: 1, count: 2, img: bg, color: '#E29E76' },
  { name: 'Temmo', cost: 1, count: 2, img: bg, color: '#E29E76' },
  { name: 'Temmo', cost: 1, count: 2, img: bg, color: '#E29E76' },
  { name: 'Temmo', cost: 1, count: 2, img: bg, color: '#E29E76' },
  { name: 'Temmo', cost: 1, count: 2, img: bg, color: '#E29E76' },
  { name: 'Temmo', cost: 1, count: 2, img: bg, color: '#E29E76' },
  { name: 'Temmo', cost: 1, count: 2, img: bg, color: '#E29E76' },
  { name: 'Temmo', cost: 1, count: 2, img: bg, color: '#E29E76' },
  { name: 'Temmo', cost: 1, count: 2, img: bg, color: '#E29E76' },
];

export default function ListCardDeck() {
  return (
    <div className="h-full w-full rounded-lg border border-gray-500 overflow-scroll no-scrollbar p-1">
      {data.map((node, i) => {
        return <MiniCard name={node.name} key={i} cost={node.cost} count={node.count} color={node.color} img={node.img} />;
      })}
    </div>
  );
}
