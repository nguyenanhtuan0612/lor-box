import RarityButton from '@/components/atoms/buttons/RarityButton';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
}

export default function RarityBtnList(props: Props) {
  return (
    <div className="h-fit">
      <span className="text-sm text-gray-300">Độ hiếm:</span>
      <div className="flex items-center gap-2">
        <RarityButton value={props.value} setValue={props.setValue} icon="Champion" />
        <RarityButton value={props.value} setValue={props.setValue} icon="Epic" />
        <RarityButton value={props.value} setValue={props.setValue} icon="Rare" />
        <RarityButton value={props.value} setValue={props.setValue} icon="Common" />
      </div>
    </div>
  );
}
