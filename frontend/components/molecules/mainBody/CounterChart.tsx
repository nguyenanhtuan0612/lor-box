import React from 'react';
import CounterColumn from '../../atoms/DeckItem/CounterColumn';

export default function CounterChart() {
  return (
    <div className="flex w-full justify-center items-end h-fit">
      <CounterColumn cost="0" percent={30} count={3} />
      <CounterColumn cost="1" percent={60} count={6} />
      <CounterColumn cost="2" percent={70} count={7} />
      <CounterColumn cost="3" percent={90} count={8} />
      <CounterColumn cost="4" percent={100} count={10} />
      <CounterColumn cost="5" percent={10} count={1} />
      <CounterColumn cost="6" percent={0} count={0} />
      <CounterColumn cost="7" percent={30} count={3} />
      <CounterColumn cost="8" percent={0} count={0} />
      <CounterColumn cost="9" percent={10} count={1} />
      <CounterColumn cost="10+" percent={0} count={0} />
    </div>
  );
}
