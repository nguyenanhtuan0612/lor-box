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
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconBandlecity" active={false} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconBilgewater" active={false} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconDemacia" active={false} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconFreljord" active={false} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconIonia" active={false} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconNoxus" active={false} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconPiltoverzaun" active={false} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconRuneterra" active={false} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconShadowisles" active={false} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconShurima" active={false} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconTargon" active={false} />
    </div>
  );
}
