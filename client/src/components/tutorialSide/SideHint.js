import React from 'react';
import { useSelector } from 'react-redux';
import { Header, Span, LevelContainer, FowardIcon, BackIcon, ListIcon, ClearIcon } from './SideHint.styled';

function SideHint({ length, tip, movePrev, moveNext, toggle }) {
  const { index } = useSelector((state) => state.bookmark);
  const clearList = useSelector((state) => state.list);

  const Tips = () => {
    if (!Array.isArray(tip)) {
      return <></>;
    }

    return (
      <>
        {tip.map((el, idx) => {
          return (
            <>
              <Span key={idx} size={1.6} family={'Medium'} height={2.3} margin={0.3}>
                {el.characterSet}
              </Span>
              <Span margin={1.4} letterspacing={0.7}>
                {el.explanation}
              </Span>
            </>
          );
        })}
      </>
    );
  };

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
      <Tips />
    </>
  );
}

export default SideHint;
