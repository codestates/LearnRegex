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
      <Container>
        <SideHint hint={list[index].hint} movePrev={movePrev} moveNext={moveNext} toggle={toggle} />
        <SideList list={list} moveIndex={moveIndex} isOpen={isOpen} toggle={toggle} />
      </Container>
    </>
  );
}

export default TutorialSide;
