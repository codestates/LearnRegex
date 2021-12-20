/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizzes } from '../modules/quiz/getquizzes';
import { Container, List } from './Paginate.styled';

function Paginate() {
  const { pages } = useSelector((state) => state.getquizzes.list);
  const [current, setCurrent] = useState(Number(sessionStorage.getItem('current')) || 0);
  const dispatch = useDispatch();

  const page = new Array(pages || 1).fill(true);

  // * -------- 페이지 이동 함수 --------
  const movePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const moveNext = () => {
    if (current < page.length - 1) setCurrent(current + 1);
  };

  const moveIndex = (idx) => {
    setCurrent(idx);
  };
  // * -------- 페이지 이동 함수 --------

  useEffect(() => {
    sessionStorage.setItem('current', current);
    dispatch(getQuizzes(current));
  }, [current]);

  return (
    <>
      <Container>
        <span onClick={movePrev}>&lt;</span>
        <ul>
          {page.map((el, idx) => (
            <List key={idx} onClick={() => moveIndex(idx)} current={current === idx}>
              {idx + 1}
            </List>
          ))}
        </ul>
        <span onClick={moveNext}>&gt;</span>
      </Container>
    </>
  );
}

export default Paginate;
