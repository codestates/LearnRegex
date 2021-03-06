/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TutorialSide from '../components/tutorialSide';
import QuizForm from '../components/QuizForm';
import { saveBookmark } from '../modules/bookmark';
import { dummyData } from '../data/tutorialData';
import { Container } from './Tutorial.styled';
import { setModal } from '../modules/modal';

function Tutorial() {
  const { index } = useSelector((state) => state.bookmark);
  const [current, setCurrent] = useState(index);
  const [list, setList] = useState(dummyData);
  const dispatch = useDispatch();

  //! ------------------------ 리스트 이동 함수 ------------------------
  const movePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const moveNext = () => {
    if (index === list.length - 1) dispatch(setModal('tutorialFinish'));
    else if (current < list.length - 1) setCurrent(current + 1);
  };

  const moveIndex = (id) => {
    setCurrent(id - 1);
  };
  //! ------------------------ 리스트 이동 함수 ------------------------

  useEffect(() => {
    dispatch(saveBookmark(current));
  }, [current]);

  return (
    <>
      <Container>
        <div className="content">
          <p>{list[current].title}</p>
          <QuizForm data={list[current]} orderPage={'tutorial'} moveNext={moveNext} />
        </div>
        <div className="sidebar">
          <TutorialSide list={list} movePrev={movePrev} moveNext={moveNext} moveIndex={moveIndex} />
        </div>
      </Container>
    </>
  );
}

export default Tutorial;
