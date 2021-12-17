import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TutorialSide from '../components/tutorialSide';
import QuizForm from '../components/QuizForm';
import { saveBookmark } from '../modules/bookmark';
import { dummyData } from '../data/tutorialData';

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
      <div>
        <div>
          <div>제목: {list[current].title}</div>
          <div>
            <QuizForm data={list[current]} orderPage={'tutorial'} moveNext={moveNext} />
          </div>
        </div>
        <div>
          <TutorialSide list={list} movePrev={movePrev} moveNext={moveNext} moveIndex={moveIndex} />
        </div>
      </div>
    </>
  );
}

export default Tutorial;
