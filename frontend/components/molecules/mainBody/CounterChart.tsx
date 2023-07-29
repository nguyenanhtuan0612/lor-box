import React from 'react';
import CounterColumn from '../../atoms/DeckItem/CounterColumn';

export default function CounterChart() {
  return (
    <div className="flex w-full justify-center items-center h-fit">
      <CounterColumn cost="0" percent={30} />
      <CounterColumn cost="1" percent={60} />
      <CounterColumn cost="2" percent={70} />
      <CounterColumn cost="3" percent={90} />
      <CounterColumn cost="4" percent={100} />
      <CounterColumn cost="5" percent={10} />
      <CounterColumn cost="6" percent={0} />
      <CounterColumn cost="7" percent={34} />
      <CounterColumn cost="8" percent={0} />
      <CounterColumn cost="9" percent={12} />
      <CounterColumn cost="10+" percent={0} />
    </div>
  );
}
