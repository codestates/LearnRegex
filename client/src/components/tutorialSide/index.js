import React, { useState } from 'react';
import SideHint from './SideHint';
import SideList from './SideList';

// 목록(SideList 컴포넌트)는 경우에 따라 보였다 안보였다 하기 때문에 상태(isOpen) 관리를 위해 부모 컴포넌트를 하나 만들었어요.
function TutorialSide({ list, current, movePrev, moveNext, moveIndex }) {
  // console.log(list);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideHint current={current} hint={list[current].hint} movePrev={movePrev} moveNext={moveNext} toggle={toggle} />
      <SideList list={list} current={current} moveIndex={moveIndex} isOpen={isOpen} toggle={toggle} />
    </>
  );
}

export default TutorialSide;
