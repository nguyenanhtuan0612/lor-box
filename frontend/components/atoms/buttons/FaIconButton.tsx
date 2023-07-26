import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  icon: IconProp;
}

export default function FaIconButton(props: Props) {
  return (
    <div className="w-12 hover:bg-gray-700 flex items-center justify-center h-12 hover:rounded-md">
      <FontAwesomeIcon icon={props.icon} size="lg" />
    </div>
  );
}
