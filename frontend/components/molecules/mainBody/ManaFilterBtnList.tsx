import ManaFilterButton from '@/components/atoms/buttons/ManaFilterButton';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  value: number[];
  setValue: Dispatch<SetStateAction<number[]>>;
}

export default function ManaFilterBtnList(props: Props) {
  return (
    <div className="h-fit">
      <span className="text-sm text-gray-300">Mana:</span>
      <div className="flex items-center gap-2 flex-wrap">
        <ManaFilterButton value={props.value} setValue={props.setValue} cost="0" />
        <ManaFilterButton value={props.value} setValue={props.setValue} cost="1" />
        <ManaFilterButton value={props.value} setValue={props.setValue} cost="2" />
        <ManaFilterButton value={props.value} setValue={props.setValue} cost="3" />
        <ManaFilterButton value={props.value} setValue={props.setValue} cost="4" />
        <ManaFilterButton value={props.value} setValue={props.setValue} cost="5" />
        <ManaFilterButton value={props.value} setValue={props.setValue} cost="6" />
        <ManaFilterButton value={props.value} setValue={props.setValue} cost="7" />
        <ManaFilterButton value={props.value} setValue={props.setValue} cost="8" />
        <ManaFilterButton value={props.value} setValue={props.setValue} cost="9" />
        <ManaFilterButton value={props.value} setValue={props.setValue} cost="10+" />
      </div>
    </div>
  );
}
