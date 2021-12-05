import React, { useState } from 'react';
import SideHint from './SideHint';
import SideList from './SideList';

// 목록(SideList 컴포넌트)는 경우에 따라 보였다 안보였다 하기 때문에 상태(isOpen) 관리를 위해 부모 컴포넌트를 하나 만들었어요.
function TutorialSide({ list, current, movePrev, moveNext, moveIndex }) {
  // console.log(list);

  return (
    <>
      <SideHint level={current + 1} hint={list[current].hint} movePrev={movePrev} moveNext={moveNext} />
      <SideList list={list} moveIndex={moveIndex} />
    </>
  );
}

export default TutorialSide;
