import React, { useState } from 'react';
import TutorialSide from '../components/TutorialSide';
import QuizForm from '../components/QuizForm';
import { dummyData } from '../data/tutorialData';

function Tutorial() {
  const [list, setList] = useState(dummyData);
  console.log(list[0]);
  return (
    <>
      <div>
        <div>
          <div>제목</div>
          <div>
            <QuizForm data={list[0]} />
          </div>
        </div>
        <div>
          <TutorialSide />
        </div>
      </div>
    </>
  );
}

export default Tutorial;
