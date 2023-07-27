import React, { ReactElement } from 'react';
import MainHeader from '../organisms/headers/MainHeader';
import MainSidebar from '../organisms/sidebars/MainSidebar';
import MainBody from '../organisms/body/MainBody';

export default function MainTemplate() {
  return (
    <>
      <MainHeader />
      <div className="h-[calc(100vh-64px)] relative">
        <MainSidebar />
        <MainBody />
      </div>
    </>
  );
}
