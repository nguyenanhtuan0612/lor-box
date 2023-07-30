import RarityButton from '@/components/atoms/buttons/RarityButton';
import React from 'react';

export default function RarityBtnList() {
  return (
    <div className="h-fit">
      <span className="text-sm text-gray-300">Độ hiếm:</span>
      <div className="flex items-center gap-2">
        <RarityButton active={true} icon="champion" />
        <RarityButton active={false} icon="epic" />
        <RarityButton active={false} icon="rare" />
        <RarityButton active={false} icon="common" />
      </div>
    </div>
  );
}
