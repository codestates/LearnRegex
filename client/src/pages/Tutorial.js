import React, { useState } from 'react';
import TutorialSide from '../components/TutorialSide';
import QuizForm from '../components/QuizForm';
import { dummyData } from '../data/tutorialData';

function Tutorial() {
  const [list, setList] = useState(dummyData);
  const [current, setCurrent] = useState(0);

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
          <TutorialSide tip={list[current].tip} />
        </div>
      </div>
    </>
  );
}

export default Tutorial;
