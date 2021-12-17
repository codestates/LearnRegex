import React from 'react';
import { useSelector } from 'react-redux';
import { Container, FowardIcon, BackIcon, ListIcon, ClearIcon } from './SideHint.styled';

function SideHint({ tip, movePrev, moveNext, toggle }) {
  const { index } = useSelector((state) => state.bookmark);
  const clearList = useSelector((state) => state.list);

  return (
    <>
      <Container className="hint">
        <div className="arrow">
          <BackIcon onClick={movePrev} />
          <FowardIcon onClick={moveNext} />
        </div>
        <div className="listIcon">
          <ListIcon onClick={() => toggle(true)} />
        </div>
        <div className="title">
          <span>Level {index + 1} of 30</span>
          {clearList[index] ? <ClearIcon /> : ''}
        </div>
        <div className="hintBox">
          <p>{tip.length > 0 ? tip[0].characterSet : ``}</p>
          <span>{tip.length > 0 ? tip[0].explanation : ``}</span>
        </div>
      </Container>
    </>
  );
}

export default SideHint;
