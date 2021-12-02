import React, { useState } from 'react';
import TutorialSide from '../components/TutorialSide';
import QuizForm from '../components/QuizForm';
import { dummyData } from '../data/tutorialData';

function Tutorial() {
  console.log(dummyData);
  return (
    <>
      <div>
        <div>
          <div>제목</div>
          <div>
            <QuizForm />
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
