import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'react-tooltip';

interface Props {
  tooltipMsg: string;
  icon: IconProp;
  onClick?: () => void;
}

export default function FaIconCircleButton(props: Props) {
  return (
    <div
      data-tooltip-id="tooltip"
      data-tooltip-content={props.tooltipMsg}
      data-tooltip-place="top-start"
      onClick={props.onClick}
      className={`active:bg-gray-500 relative flex w-10 h-10 bg-gray-600/[.3] border-gray-500 justify-center items-center rounded-full border   hover:bg-gray-500/[.8]`}
    >
      <FontAwesomeIcon icon={props.icon} size="lg" color="#CFC8BE" />
      <Tooltip id="tooltip" style={{ backgroundColor: 'rgb(75 85 99 / .8)', padding: '4px 8px', fontSize: '14px' }} />
    </div>
  );
}
