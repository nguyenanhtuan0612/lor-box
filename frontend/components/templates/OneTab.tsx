import React from 'react';

interface Props {
  active: boolean;
  text: string;
  onClick: (text: string) => void;
}

export default function OneTab(props: Props) {
  return props.active ? (
    <div
      className="w-6/12 border-b-2 border-red-600 py-2 border"
      onClick={() => {
        props.onClick(props.text);
      }}
    >
      <span className="inline-block text-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500">{props.text}</span>
    </div>
  ) : (
    <div
      className="w-6/12 border-b-2 border-blue-600 py-2 border"
      onClick={() => {
        props.onClick(props.text);
      }}
    >
      <span className="inline-block text-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">{props.text}</span>
    </div>
  );
}
