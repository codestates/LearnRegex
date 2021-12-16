import React from 'react';
import { useSelector } from 'react-redux';
import { Container, FowardIcon, BackIcon, ListIcon, ClearIcon, NotClearIcon } from './SideHint.styled';

function SideHint({ hint, movePrev, moveNext, toggle }) {
  const { index } = useSelector((state) => state.bookmark);
  const clearList = useSelector((state) => state.list);

  return (
    <>
      <Container className="hint">
        <div className="header">
          <div>
            <BackIcon onClick={movePrev} />
            <FowardIcon onClick={moveNext} />
          </div>
          <div>
            <ListIcon
              onClick={() => {
                console.log('???');
                toggle(true);
              }}
            />
          </div>
        </div>
        <div className="title">
          {clearList[index] ? <ClearIcon color="green" /> : <NotClearIcon />}
          <span>Level {index + 1} of 30</span>
        </div>
        <div className="hint">{hint}</div>
      </Container>
    </>
  );
}

export default SideHint;
