import React, { ReactElement } from 'react';
import MainHeader from '../organisms/headers/MainHeader';
import MainSidebar from '../organisms/sidebars/MainSidebar';

export default function MainTemplate() {
  return (
    <>
      <MainHeader />
      <div className="h-[calc(100vh-64px)] relative">
        <MainSidebar />
      </div>
    </>
  );
}
