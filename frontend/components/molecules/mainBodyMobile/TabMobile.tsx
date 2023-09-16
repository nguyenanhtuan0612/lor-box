import React from 'react';

interface Props {
  active: boolean;
  text: string;
  onChangeTab: (value: 'cards' | 'deck') => void;
  tab: 'cards' | 'deck';
  count: number;
}

export default function TabMobile(props: Props) {
  return props.active ? (
    <div className="w-6/12  border-b-2 border-blue-600 py-2" onClick={() => props.onChangeTab(props.tab)}>
      <span className="inline-block text-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">{props.text == 'Bộ bài' ? props.text + `(${props.count}/40)` : props.text}</span>
    </div>
  ) : (
    <div className="w-6/12 border-b-2 py-2" onClick={() => props.onChangeTab(props.tab)}>
      <span className="inline-block border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
        {props.text == 'Bộ bài' ? props.text + `(${props.count}/40)` : props.text}
      </span>
    </div>
  );
}
