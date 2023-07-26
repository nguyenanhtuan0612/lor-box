import React from 'react';
import Image from 'next/image';
import logo from '@/public/favicon.ico';
import FaIconButton from '@/components/atoms/buttons/FaIconButton';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function MainHeader() {
  return (
    <div className="bg-gray-900 px-4 h-16 items-center flex">
      <Image src={logo} height={56} alt="logo"></Image>
      <FaIconButton icon={faUser}></FaIconButton>
    </div>
  );
}
