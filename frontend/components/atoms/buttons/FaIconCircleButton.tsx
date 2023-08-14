import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      className={`active:bg-gray-500 relative flex 2xl:w-12 2xl:h-12 w-10 h-10 bg-gray-600/[.3] border-gray-500 justify-center items-center rounded-full border   hover:bg-gray-500/[.8]`}
    >
      <FontAwesomeIcon icon={props.icon} size="lg" color="#CFC8BE" />
    </div>
  );
}
