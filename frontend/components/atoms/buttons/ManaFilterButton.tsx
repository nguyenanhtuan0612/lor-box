import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  active: boolean;
  cost: string;
}

export default function ManaFilterButton(props: Props) {
  return (
    <div className={`relative flex w-10 h-10 justify-center items-center rounded-full border ${props.active ? 'bg-gray-500/[.8]' : 'bg-gray-500/[.3]'} border-gray-500 hover:bg-gray-500/[.8]`}>
      {props.active ? <FontAwesomeIcon icon={faCheck} className="absolute -right-0.5 -top-0.5 text-green-600" /> : <></>}
      <span className="text-gray-200">{props.cost}</span>
    </div>
  );
}
