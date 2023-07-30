import React from 'react';
import FormatCircleButton from '@/components/atoms/buttons/FormatCircleButton';

export default function FormatCircleBtnList() {
  return (
    <div className="h-fit">
      <span className="text-sm text-gray-300">Chế độ chơi:</span>
      <div className="flex items-center gap-2">
        <FormatCircleButton active={true} icon="standard" />
        <FormatCircleButton active={false} icon="eternal" />
      </div>
    </div>
  );
}
