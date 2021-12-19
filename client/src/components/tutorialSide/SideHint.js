import React from 'react';
import { useSelector } from 'react-redux';
import { Header, Span, LevelContainer, FowardIcon, BackIcon, ListIcon, ClearIcon } from './SideHint.styled';

function SideHint({ length, tip, movePrev, moveNext, toggle }) {
  const { index } = useSelector((state) => state.bookmark);
  const clearList = useSelector((state) => state.list);

  return (
    <>
      <Header>
        <Span size={2} family={'Semibold'}>
          Level {index + 1} of {length}
        </Span>
        {clearList[index] ? <ClearIcon /> : <></>}
        <LevelContainer>
          <BackIcon onClick={movePrev} />
          <FowardIcon onClick={moveNext} />
          <ListIcon onClick={() => toggle(true)} />
        </LevelContainer>
      </Header>
      <hr />
      <Span size={1.6} family={'Medium'} height={2.7}>
        {tip.length > 0 ? tip[0].characterSet : <Span size={1.2}>힌트가 없습니다.</Span>}
      </Span>
      <Span>{tip.length > 0 ? tip[0].explanation : ''}</Span>
    </>
  );
}

export default SideHint;
