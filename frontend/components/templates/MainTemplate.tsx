import React, { ReactElement } from 'react';
import MainHeader from '../organisms/headers/MainHeader';
import MainSidebar from '../organisms/sidebars/MainSidebar';
import MainBody from '../organisms/body/MainBody';
import useWindowSize from '../atoms/hooks/useWindowSize';
import MainBodyMobile from '../organisms/body/MainBodyMobile';

export default function MainTemplate() {
  const size = useWindowSize();

  return (
    <>
      <MainHeader />
      <div className="h-[calc(100vh-64px)] relative">
        <MainSidebar />
        {size.width > 640 ? <MainBody /> : <MainBodyMobile />}
      </div>
    </>
  );
}
