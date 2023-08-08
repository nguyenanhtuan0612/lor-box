import React, { useEffect, useState } from 'react';

interface PropsColumn {
  cost: string;
  percent: number;
  count: number;
  max: number;
}

export default function CounterColumn(props: PropsColumn) {
  const [all, setAll] = useState(0);

  useEffect(() => {
    setAll(props.max);
  }, [props.max]);

  return (
    <div className="w-[calc(10%)] h-fit">
      <div className="flex justify-center h-fit">
        <span className="text-sm text-white">{props.count}</span>
      </div>
      <div className="border-b border-gray-400 px-0.5 flex flex-col justify-end">
        <div
          className={` ${props.percent ? 'border border-b-0' : ''} border-gray-400 rounded-t-lg bg-blue-500 transition-[height]  duration-300`}
          style={{ height: `calc(${props.percent} / 100 * 56px)` }}
        ></div>
      </div>
      <div className="flex justify-center h-fit">
        <span className="text-sm text-white">{props.cost}</span>
      </div>
    </div>
  );
}
