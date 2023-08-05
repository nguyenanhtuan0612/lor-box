import React, { Dispatch, SetStateAction } from 'react';
import FormatCircleButton from '@/components/atoms/buttons/FormatCircleButton';

interface Props {
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
}

export default function FormatCircleBtnList(props: Props) {
  return (
    <div className="h-fit">
      <span className="text-sm text-gray-300">Chế độ chơi:</span>
      <div className="flex items-center gap-2">
        <FormatCircleButton value={props.value} setValue={props.setValue} active={false} icon="standard" />
        <FormatCircleButton value={props.value} setValue={props.setValue} active={false} icon="eternal" />
      </div>
    </div>
  );
}
