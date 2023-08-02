import RegionCircleButton from '@/components/atoms/buttons/RegionCircleButton';
import React from 'react';

export default function RegionCircleBtnList() {
  return (
    <div className="flex h-full items-center gap-2">
      {/* <RegionCircleButton icon="iconAll" active={true} /> */}
      <RegionCircleButton icon="iconBandlecity" active={false} />
      <RegionCircleButton icon="iconBilgewater" active={false} />
      <RegionCircleButton icon="iconDemacia" active={false} />
      <RegionCircleButton icon="iconFreljord" active={false} />
      <RegionCircleButton icon="iconIonia" active={false} />
      <RegionCircleButton icon="iconNoxus" active={false} />
      <RegionCircleButton icon="iconPiltoverzaun" active={false} />
      <RegionCircleButton icon="iconRuneterra" active={false} />
      <RegionCircleButton icon="iconShadowisles" active={false} />
      <RegionCircleButton icon="iconShurima" active={false} />
      <RegionCircleButton icon="iconTargon" active={false} />
    </div>
  );
}
