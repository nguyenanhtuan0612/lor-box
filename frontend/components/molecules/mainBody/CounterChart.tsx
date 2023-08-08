import React, { Dispatch, SetStateAction } from 'react';
import CounterColumn from '../../atoms/DeckItem/CounterColumn';
import { IManaCounter } from '@/interface/manaCounter';

interface Props {
  value: IManaCounter;
  setValue: Dispatch<SetStateAction<IManaCounter>>;
}

export default function CounterChart(props: Props) {
  function getPercent(count: number) {
    let percent = 0;
    if (props.value?.max != 0) {
      percent = (count / props.value?.max) * 100;
    }

    return percent;
  }

  return (
    <div className="flex w-full justify-center items-end h-fit">
      <CounterColumn cost="0" percent={getPercent(props.value?.zero)} count={props.value?.zero} max={props.value?.max} />
      <CounterColumn cost="1" percent={getPercent(props.value?.one)} count={props.value?.one} max={props.value?.max} />
      <CounterColumn cost="2" percent={getPercent(props.value?.two)} count={props.value?.two} max={props.value?.max} />
      <CounterColumn cost="3" percent={getPercent(props.value?.three)} count={props.value?.three} max={props.value?.max} />
      <CounterColumn cost="4" percent={getPercent(props.value?.four)} count={props.value?.four} max={props.value?.max} />
      <CounterColumn cost="5" percent={getPercent(props.value?.five)} count={props.value?.five} max={props.value?.max} />
      <CounterColumn cost="6" percent={getPercent(props.value?.six)} count={props.value?.six} max={props.value?.max} />
      <CounterColumn cost="7" percent={getPercent(props.value?.seven)} count={props.value?.seven} max={props.value?.max} />
      <CounterColumn cost="8" percent={getPercent(props.value?.eight)} count={props.value?.eight} max={props.value?.max} />
      <CounterColumn cost="9" percent={getPercent(props.value?.nine)} count={props.value?.nine} max={props.value?.max} />
      <CounterColumn cost="10+" percent={getPercent(props.value?.more)} count={props.value?.more} max={props.value?.max} />
    </div>
  );
}
