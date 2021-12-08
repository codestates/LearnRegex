import React from 'react';
import { useSelector } from 'react-redux';
import { dummyData } from '../../data/tutorialData';

const QuizAnswer = () => {
  const { modalType } = useSelector((state) => state.modal);
  const { index } = useSelector((state) => state.bookmark);
  const { answer, explanation } = useSelector((state) => state.getquiz.quiz.data || { answer: '', explanation: '' });
  const tutorialAnswer = dummyData[index].answer;
  const tutorialExplanation = dummyData[index].explanation;

  return (
    <>
      <div>{modalType === 'quizAnswer' ? answer : tutorialAnswer}</div>
      <div>{modalType === 'quizAnswer' ? explanation : tutorialExplanation}</div>
    </>
  );
};

export default QuizAnswer;
