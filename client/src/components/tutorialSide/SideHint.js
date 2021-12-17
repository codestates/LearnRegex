import React from 'react';
import { useSelector } from 'react-redux';
import { Container, FowardIcon, BackIcon, ListIcon, ClearIcon } from './SideHint.styled';

function SideHint({ tip, movePrev, moveNext, toggle }) {
  const { index } = useSelector((state) => state.bookmark);
  const clearList = useSelector((state) => state.list);

  return (
    <>
      <BackIcon onClick={movePrev} />
      <FowardIcon onClick={moveNext} />
      <ListIcon onClick={() => toggle(true)} />
      <span>Level {index + 1} of 30</span>
      {clearList[index] ? <ClearIcon /> : ''}
      <p>{tip.length > 0 ? tip[0].characterSet : ``}</p>
      <span>{tip.length > 0 ? tip[0].explanation : ``}</span>
    </>
  );
}

export default SideHint;
