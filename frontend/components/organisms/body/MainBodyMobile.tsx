import React, { useState } from 'react';

export default function MainBodyMobile() {
  return (
    <div className=" absolute h-full w-full">
      <div className="absolute -z-20 bg-[url('https://dd.b.pvp.net/4_7_0/set1/vi_vn/img/cards/01DE012T1-full.png')] h-full w-full bg-cover"></div>
      <div className="absolute bg-gray-800/[.6] -z-10 h-full w-full"></div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex -mb-px justify-between">
          <li className="w-6/12 border-b-2 py-2">
            <span className="inline-block border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Bộ bài</span>
          </li>
          <li className="w-6/12  border-b-2 border-blue-600 py-2">
            <span className="inline-block text-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">
              Danh sách thẻ bài
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
