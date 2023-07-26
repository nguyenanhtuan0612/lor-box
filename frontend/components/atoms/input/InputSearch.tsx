import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function InputSearch() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </div>
      <div className="flex items-center h-12">
        <input
          className="block w-96 h-full pl-10 text-sm  border  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Thẻ bài..."
        />
      </div>

      <div className="absolute flex items-center inset-y-0 right-2">
        <button className=" text-white my-auto  focus:outline-none0 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800">Tìm kiếm</button>
      </div>
    </div>
  );
}
