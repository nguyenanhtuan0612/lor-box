import RegionCircleButton from '@/components/atoms/buttons/RegionCircleButton';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
}

export default function RegionCircleBtnList(props: Props) {
  return (
    <div className="flex h-full items-center gap-2">
      {/* <RegionCircleButton icon="iconAll" active={true} /> */}
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconBandlecity" />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconBilgewater" />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconDemacia" />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconFreljord" />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconIonia" />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconNoxus" />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconPiltoverzaun" />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconRuneterra" />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconShadowisles" />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconShurima" />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconTargon" />
    </div>
  );
}
