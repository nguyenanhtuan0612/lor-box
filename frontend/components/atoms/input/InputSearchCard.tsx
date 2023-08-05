import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export default function InputSearchCard(props: Props) {
  const [inputValue, setInputValue] = React.useState(props.value);
  const [debouncedValue] = useDebounce(inputValue, 500);

  useEffect(() => {
    setInputValue(props.value);
  }, [props.value]);

  useEffect(() => {
    props.setValue(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FontAwesomeIcon icon={faSearch} size="lg" color="white" />
      </div>
      <div className="flex items-center h-10">
        <input
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
          className="block w-60 h-full pl-10 text-sm  border  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-200 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Thẻ bài..."
        />
      </div>
    </div>
  );
}
