import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface Props {
  cost: string;
  value: number[];
  setValue: Dispatch<SetStateAction<number[]>>;
}

export default function ManaFilterButton(props: Props) {
  const [active, setActive] = useState(false);

  function checkActive() {
    const cost = parseInt(props.cost);
    const arr = props.value;
    return arr.includes(cost);
  }

  useEffect(() => {
    setActive(checkActive());
  }, [props.value]);

  return (
    <div
      onClick={() => {
        const cost = parseInt(props.cost);
        const arr = props.value;
        if (active) {
          const index = arr.indexOf(cost);
          if (index !== -1) {
            const temp = arr.filter(function (e) {
              return e !== cost;
            });
            props.setValue(temp);
          }
        } else {
          props.setValue([...arr, cost]);
        }
        setActive(!active);
      }}
      className={`active:bg-gray-500 relative flex 2xl:w-12 2xl:h-12 w-10 h-10 justify-center items-center rounded-full border ${
        active ? 'bg-gray-600/[.8] border-yellow-200' : 'bg-gray-600/[.3] border-gray-500'
      }  hover:bg-gray-500/[.8] hover:cursor-pointer`}
    >
      {active ? <FontAwesomeIcon icon={faCheck} className="absolute -right-0.5 -top-0.5 text-green-600" /> : <></>}
      <span className="text-gray-200">{props.cost}</span>
    </div>
  );
}
