import RegionCircleButton from '@/components/atoms/buttons/RegionCircleButton';
import { IDeckInfo } from '@/interface/deckInfo';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
  deckInfo: IDeckInfo;
}

export default function RegionCircleBtnList(props: Props) {
  return (
    <div className="flex h-full items-center gap-2">
      {/* <RegionCircleButton icon="iconAll" active={true} /> */}
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconBandlecity" deckInfo={props.deckInfo} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconBilgewater" deckInfo={props.deckInfo} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconDemacia" deckInfo={props.deckInfo} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconFreljord" deckInfo={props.deckInfo} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconIonia" deckInfo={props.deckInfo} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconNoxus" deckInfo={props.deckInfo} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconPiltoverzaun" deckInfo={props.deckInfo} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconRuneterra" deckInfo={props.deckInfo} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconShadowisles" deckInfo={props.deckInfo} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconShurima" deckInfo={props.deckInfo} />
      <RegionCircleButton value={props.value} setValue={props.setValue} icon="iconTargon" deckInfo={props.deckInfo} />
    </div>
  );
}
