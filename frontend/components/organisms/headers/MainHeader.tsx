import React from 'react';
import Image from 'next/image';
import logo from '@/public/img/logo.png';
import IconNavigation from '@/components/molecules/mainHeader/IconNavigation';

export default function MainHeader() {
  return (
    <div className="bg-gray-900 px-2 h-16 items-center flex gap-2 border-b border-gray-700">
      <Image src={logo} height={40} alt="logo"></Image>
      <IconNavigation />
    </div>
  );
}
