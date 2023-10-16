import OneTab from '@/components/templates/OneTab';
import React, { useEffect, useState } from 'react';

export default function demoNav() {
  const [cur, setCur] = useState('Hi'); //bloc, localStorage(Shared Prefrence) get, set

  useEffect(() => {
    const items = localStorage.getItem('cur') || 'Hi';
    setCur(items);
  }, []);

  function onClickTab(value: string) {
    if (value != cur) {
      localStorage.setItem('cur', value);
      setCur(value);
    }
  }
  console.log(cur);

  //active nó nhận 1 cái biến boolean
  //cur == 'Hi' trên true , dưới false
  return (
    <div className="flex">
      <OneTab active={cur == 'Hi'} text="Hi" onClick={onClickTab} />
      <OneTab active={cur == 'Bye'} text="Bye" onClick={onClickTab} />
      <OneTab active={cur == 'Hello'} text="Hello" onClick={onClickTab} />
    </div>
  );
}
