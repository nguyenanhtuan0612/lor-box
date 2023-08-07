import CardTyeCircleButton from '@/components/atoms/buttons/CardTyeCircleButton';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
}

export default function CardTypeCircleBtnList(props: Props) {
  return (
    <div className="ml-2 h-fit">
      <span className="text-sm text-gray-300">Loại thẻ bài:</span>
      <div className="flex items-center gap-2">
        <CardTyeCircleButton value={props.value} setValue={props.setValue} icon="unit" />
        <CardTyeCircleButton value={props.value} setValue={props.setValue} icon="spell" />
        <CardTyeCircleButton value={props.value} setValue={props.setValue} icon="landmark" />
        <CardTyeCircleButton value={props.value} setValue={props.setValue} icon="equipment" />
      </div>
    </div>
  );
}
