import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TutorialSide from '../components/tutorialSide';
import QuizForm from '../components/QuizForm';
import { saveBookmark } from '../modules/bookmark';
import { dummyData } from '../data/tutorialData';
import { Container } from './Tutorial.styled';

function Tutorial() {
  const { index } = useSelector((state) => state.bookmark);
  useSelector((state) => console.log(state.bookmark));
  const [current, setCurrent] = useState(index);
  const [list, setList] = useState(dummyData);
  const dispatch = useDispatch();

  //! ------------------------ 리스트 이동 함수 ------------------------
  const movePrev = () => {
    current === 0 ? alert('첫번째 문제입니다!') : setCurrent(current - 1);
  };

  const moveNext = () => {
    current === list.length - 1 ? alert('마지막 문제입니다!') : setCurrent(current + 1);
  };

  const moveIndex = (id) => {
    setCurrent(id - 1);
  };
  //! ------------------------ 리스트 이동 함수 ------------------------

  useEffect(() => {
    // console.log(current);
    // console.log('튜토리얼!');
    dispatch(saveBookmark(current));
  }, [current]);
  console.log(current);

  return (
    <>
      <Container>
        <div className="content">
          <p>{list[current].title}</p>
          <QuizForm data={list[current]} orderPage={'tutorial'} />
        </div>
        <div className="side">
          <TutorialSide list={list} movePrev={movePrev} moveNext={moveNext} moveIndex={moveIndex} />
        </div>
      </Container>
    </>
  );
}

export default Tutorial;
