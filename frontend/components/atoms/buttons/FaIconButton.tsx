import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  icon: IconProp;
  size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  w?: string;
  h?: string;
  tooltipMsg?: string;
  onClick?: () => void;
  disable?: boolean;
}

export default function FaIconButton({ icon, size = 'lg', w = 'w-12', h = 'h-12', tooltipMsg, onClick = () => {}, disable = false }: Props) {
  return (
    <div
      data-tooltip-id="tooltip"
      data-tooltip-content={disable ? '' : tooltipMsg}
      data-tooltip-place="top-start"
      onClick={onClick}
      className={disable ? `${w} ${h} flex items-center justify-center` : `${w} ${h} active:bg-gray-800 hover:bg-gray-700 flex items-center justify-center hover:rounded-md hover:cursor-pointer`}
    >
      <FontAwesomeIcon icon={icon} size={size} color={disable ? 'gray' : 'white'} />
    </div>
  );
}
