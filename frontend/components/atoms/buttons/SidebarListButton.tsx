import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon: IconProp;
  text: string;
  active: boolean;
}

export default function SidebarListButton(props: Props) {
  return (
    <div className="flex h-14">
      <div className={`w-1  h-full ${props.active ? 'bg-gray-700' : ''}`}></div>
      <div className={`flex items-center w-full h-full hover:bg-gray-700 ${props.active ? 'rounded-r' : 'rounded'} mr-1 hover:text-gray-300`}>
        <div className="w-12 h-full flex items-center justify-center ">
          <FontAwesomeIcon icon={props.icon} size="lg" />
        </div>
        <span className="ml-2 text-md ">{props.text}</span>
      </div>
    </div>
  );
}
