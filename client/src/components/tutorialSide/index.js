import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SideHint from './SideHint';
import SideList from './SideList';

function TutorialSide({ list, movePrev, moveNext, moveIndex }) {
  const { index } = useSelector((state) => state.bookmark);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (boolean) => {
    setIsOpen(boolean);
  };

  return (
    <>
      <SideHint hint={list[index].hint} movePrev={movePrev} moveNext={moveNext} toggle={toggle} />
      <SideList list={list} moveIndex={moveIndex} isOpen={isOpen} toggle={toggle} />
    </>
  );
}

export default TutorialSide;
