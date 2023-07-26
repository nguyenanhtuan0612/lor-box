import React from 'react';
import Image from 'next/image';
import logo from '@/public/favicon.ico';
import IconNavigation from '@/components/molecules/MainHeader/IconNavigation';

export default function MainHeader() {
  return (
    <div className="bg-gray-900 px-4 h-16 items-center flex gap-2 border-b border-gray-700">
      <Image src={logo} height={48} alt="logo"></Image>
      <IconNavigation />
    </div>
  );
}
