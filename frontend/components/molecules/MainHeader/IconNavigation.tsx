import FaIconButton from '@/components/atoms/buttons/FaIconButton';
import InputSearch from '@/components/atoms/input/InputSearch';
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function IconNavigation() {
  return (
    <div className="flex gap-2">
      <FaIconButton icon={faHouse}></FaIconButton>
      <FaIconButton icon={faUser}></FaIconButton>
      <InputSearch />
    </div>
  );
}
