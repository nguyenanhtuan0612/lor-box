import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  icon: IconProp;
}

export default function FaIconButton(props: Props) {
  return (
    <div className="px-5 hover:bg-gray-800 flex items-center justify-center h-14">
      <FontAwesomeIcon icon={props.icon} size="lg" />
    </div>
  );
}
