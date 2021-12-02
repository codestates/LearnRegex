import React, { useState } from 'react';
import TutorialSide from '../components/tutorialSide';
import QuizForm from '../components/QuizForm';
import { dummyData } from '../data/tutorialData';

function Tutorial() {
  const [list, setList] = useState(dummyData);
  const [current, setCurrent] = useState(0);

  // TODO: SideHint 컴포넌트의 화살표를 클릭하면 이전 혹은 이후 리스트 이동 - current 상태 변경
  // TODO: SideList 컴포넌트의 목차를 클릭하면 맞게 리스트 이동 - current 상태 변경
  // TODO: current 상태의 초기값은 로컬스토리지에 저장한 북마크

  return (
    <>
      <div>
        <div>
          <div>제목: {list[current].title}</div>
          <div>
            <QuizForm data={list[current]} />
          </div>
        </div>
        <div>
          <TutorialSide list={list} current={current} />
        </div>
      </div>
    </>
  );
}

export default Tutorial;
