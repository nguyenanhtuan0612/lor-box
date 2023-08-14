import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import useWindowSize from '../hooks/useWindowSize';

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export default function InputSearchCard(props: Props) {
  const [inputValue, setInputValue] = React.useState(props.value);
  const [debouncedValue] = useDebounce(inputValue, 500);
  const size = useWindowSize();

  useEffect(() => {
    setInputValue(props.value);
  }, [props.value]);

  useEffect(() => {
    props.setValue(debouncedValue);
  }, [debouncedValue]);

  function sizeIcon() {
    switch (true) {
      case size.width >= 1280: {
        return 'lg';
      }
      case size.width >= 1024: {
        return undefined;
      }
      default:
        return 'lg';
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FontAwesomeIcon icon={faSearch} size={sizeIcon()} color="white" />
      </div>
      <div className="flex items-center 2xl:h-12 xl:h-10 h-10">
        <input
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
          className="block 2xl:w-72 xl:w-60 w-full h-full pl-10 2xl:text-base xl:text-sm text-sm  border  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-200 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Thẻ bài..."
        />
      </div>
    </div>
  );
}
