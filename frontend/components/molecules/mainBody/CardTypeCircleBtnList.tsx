import CardTyeCircleButton from '@/components/atoms/buttons/CardTyeCircleButton';
import React from 'react';

export default function CardTypeCircleBtnList() {
  return (
    <div className="ml-2 h-fit">
      <span className="text-sm text-gray-300">Loại thẻ bài:</span>
      <div className="flex items-center gap-2">
        <CardTyeCircleButton active={true} icon="unit" />
        <CardTyeCircleButton active={false} icon="spell" />
        <CardTyeCircleButton active={false} icon="landmark" />
        <CardTyeCircleButton active={false} icon="equipment" />
      </div>
    </div>
  );
}
