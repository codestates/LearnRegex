import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TutorialSide from '../components/tutorialSide';
import QuizForm from '../components/QuizForm';
import { saveBookmark } from '../modules/bookmark';
import { dummyData } from '../data/tutorialData';

// TODO: SideList 컴포넌트의 목차를 클릭하면 맞게 리스트 이동 - current 상태 변경

// 학습하기 페이지
function Tutorial() {
  const { index } = useSelector((state) => state.bookmark);
  // console.log(index);
  const [list, setList] = useState(dummyData);
  const [current, setCurrent] = useState(index);
  const dispatch = useDispatch();

  const movePrev = () => {
    current === 0 ? alert('첫번째 문제입니다!') : setCurrent(current - 1);
  };

  const moveNext = () => {
    current === list.length - 1 ? alert('마지막 문제입니다!') : setCurrent(current + 1);
  };

  const moveIndex = (id) => {
    setCurrent(id - 1);
  };

  useEffect(() => {
    // console.log(current);
    dispatch(saveBookmark(current));
  }, [current]);

  return (
    <>
      <div>
        <div>
          <div>제목: {list[current].title}</div>
          <div>
            <QuizForm data={list[current]} orderPage={'tutorial'} />
          </div>
        </div>
        <div>
          <TutorialSide list={list} current={current} movePrev={movePrev} moveNext={moveNext} moveIndex={moveIndex} />
        </div>
      </div>
    </>
  );
}

export default Tutorial;
