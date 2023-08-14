import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function InputSearch() {
  return (
    <div className="relative md:ml-0 ml-2">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FontAwesomeIcon icon={faSearch} size="lg" color="white" />
      </div>
      <div className="flex items-center md:h-12 h-8">
        <input
          className="block md:w-96 w-60 h-full pl-10 text-sm  border  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Thẻ bài..."
        />
      </div>

      <div className="absolute flex items-center inset-y-0 right-2">
        <button className=" text-white my-auto focus:outline-none font-medium md:text-sm text-xs active:rounded-lg rounded-lg md:px-4 md:py-2 py-1 px-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800">
          Tìm kiếm
        </button>
      </div>
    </div>
  );
}
