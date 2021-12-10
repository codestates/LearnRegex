import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizzes } from '../modules/quiz/getquizzes';
import styled from 'styled-components';

export const List = styled.li`
  color: ${({ current }) => (current ? 'red' : 'black')};
`;

function Paginate() {
  const { pages } = useSelector((state) => state.getquizzes.list);
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();

  const list = new Array(pages || 1).fill(true);

  const movePrev = () => {
    current > 0 ? setCurrent(current - 1) : alert('첫번째 페이지입니다.');
  };

  const moveNext = () => {
    current < list.length - 1 ? setCurrent(current + 1) : alert('마지막 페이지입니다.');
  };

  const moveIndex = (idx) => {
    setCurrent(idx);
  };

  useEffect(() => {
    console.log('되니?');
    dispatch(getQuizzes(current));
  }, [current]);

  return (
    <>
      <div>
        <p onClick={movePrev}>이전</p>
        <ul>
          {list.map((el, idx) => (
            <List key={idx} onClick={() => moveIndex(idx)} current={current === idx}>
              {idx + 1}
            </List>
          ))}
        </ul>
        <p onClick={moveNext}>다음</p>
      </div>
    </>
  );
}

export default Paginate;
