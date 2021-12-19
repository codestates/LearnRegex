import React from 'react';
import { useSelector } from 'react-redux';
import { Header, Span, LevelContainer, FowardIcon, BackIcon, ListIcon, ClearIcon } from './SideHint.styled';

function SideHint({ tip, movePrev, moveNext, toggle }) {
  const { index } = useSelector((state) => state.bookmark);
  const clearList = useSelector((state) => state.list);

  // console.log(tip);

  const Tips = () => {
    console.log('this is tips');
    if (!Array.isArray(tip)) {
      console.log(tip);
      return <></>;
    }
    return (
      <>
        {tip.map((el) => {
          return (
            <>
              {console.log(el.characterSet)}
              <Span size={1.6} family={'Medium'} height={2.3}>
                {el.characterSet}
              </Span>
              <Span margin={1}>{el.explanation}</Span>
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
          Level {index + 1} of 30
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
