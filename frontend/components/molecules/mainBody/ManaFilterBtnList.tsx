import ManaFilterButton from '@/components/atoms/buttons/ManaFilterButton';
import React from 'react';

export default function ManaFilterBtnList() {
  return (
    <div className="h-fit">
      <span className="text-sm text-gray-300">Mana:</span>
      <div className="flex items-center gap-2">
        <ManaFilterButton active={true} cost="0" />
        <ManaFilterButton active={false} cost="1" />
        <ManaFilterButton active={false} cost="2" />
        <ManaFilterButton active={false} cost="3" />
        <ManaFilterButton active={false} cost="4" />
        <ManaFilterButton active={false} cost="5" />
        <ManaFilterButton active={false} cost="6" />
        <ManaFilterButton active={false} cost="7" />
        <ManaFilterButton active={false} cost="8" />
        <ManaFilterButton active={false} cost="9" />
        <ManaFilterButton active={false} cost="10+" />
      </div>
    </div>
  );
}
