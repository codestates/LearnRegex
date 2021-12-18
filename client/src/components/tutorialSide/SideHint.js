import React from 'react';
import { useSelector } from 'react-redux';
import { FowardIcon, BackIcon, ListIcon, ClearIcon } from './SideHint.styled';

function SideHint({ tip, movePrev, moveNext, toggle }) {
  const { index } = useSelector((state) => state.bookmark);
  const clearList = useSelector((state) => state.list);

  return (
    <>
      <div>
        <BackIcon onClick={movePrev} />
        <FowardIcon onClick={moveNext} />
      </div>
      <ListIcon onClick={() => toggle(true)} />
      {clearList[index] ? <ClearIcon /> : <></>}
      <span>Level {index + 1} of 30</span>
      <p>{tip.length > 0 ? tip[0].characterSet : ``}</p>
      <span>{tip.length > 0 ? tip[0].explanation : ``}</span>
    </>
  );
}

export default SideHint;
