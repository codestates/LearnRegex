import React, { useState } from 'react';
import SideHint from './SideHint';
import SideList from './SideList';

function TutorialSide({ list, current }) {
  return (
    <>
      <SideHint level={current + 1} hint={list[current].hint} />
      <SideList list={list} />
    </>
  );
}

export default TutorialSide;
