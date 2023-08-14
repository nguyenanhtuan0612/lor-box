import FaIconButton from '@/components/atoms/buttons/FaIconButton';
import useWindowSize from '@/components/atoms/hooks/useWindowSize';
import InputSearch from '@/components/atoms/input/InputSearch';
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function IconNavigation() {
  const size = useWindowSize();

  function getSize() {
    switch (true) {
      case size.width < 640: {
        return 'sm';
      }
      default:
        return undefined;
    }
  }

  return (
    <div className="flex md:gap-2 gap-1 items-center">
      {size.width > 640 ? (
        <>
          <FaIconButton h="md:h-12 h-8 " w="md:w-12 w-8" size={getSize()} icon={faHouse}></FaIconButton>
          <FaIconButton h="md:h-12 h-8 " w="md:w-12 w-8" size={getSize()} icon={faUser}></FaIconButton>
        </>
      ) : null}
      <InputSearch />
    </div>
  );
}
