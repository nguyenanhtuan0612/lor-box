import React from 'react';

interface PropsColumn {
  cost: string;
  percent: number;
  count: number;
}

export default function CounterColumn(props: PropsColumn) {
  return props.percent == 0 ? (
    <div className="w-[calc(10%)] h-fit">
      <div className="flex justify-center h-fit">
        <span className="text-sm text-white">{props.count}</span>
      </div>
      <div className="border-b border-gray-400 px-0.5 flex flex-col justify-end"></div>
      <div className="flex justify-center h-fit">
        <span className="text-sm text-white">{props.cost}</span>
      </div>
    </div>
  ) : (
    <div className="w-[calc(10%)] h-fit">
      <div className="flex justify-center h-fit">
        <span className="text-sm text-white">{props.count}</span>
      </div>
      <div className="border-b border-gray-400 px-0.5 flex flex-col justify-end">
        <div className={` border border-b-0 border-gray-400 rounded-t-lg bg-blue-500`} style={{ height: `calc(${props.percent} / 100 * 56px)` }}></div>
      </div>
      <div className="flex justify-center h-fit">
        <span className="text-sm text-white">{props.cost}</span>
      </div>
    </div>
  );
}
