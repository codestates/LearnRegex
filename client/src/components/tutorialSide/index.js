import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SideHint from './SideHint';
import SideList from './SideList';
import { Container } from './index.styled';

function TutorialSide({ list, movePrev, moveNext, moveIndex }) {
  const { index } = useSelector((state) => state.bookmark);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (boolean) => {
    setIsOpen(boolean);
  };

  return (
    <>
      {isOpen ? ( //
        <SideList list={list} moveIndex={moveIndex} isOpen={isOpen} toggle={toggle} /> //
      ) : (
        <SideHint tip={list[index].tip} movePrev={movePrev} moveNext={moveNext} toggle={toggle} />
      )}
    </>
  );
}

export default TutorialSide;
