import React from 'react';
import QuizListElement from '../components/QuizListElement';

function QuizList() {
  return (
    <>
      <QuizListElement id={1} title={'제목이당'} nickname={'김코딩'} count={3} isClear={true} />
    </>
  );
}

export default QuizList;

// TODO: 글쓰기 icon 삽입 -> 클릭하면 MakeQuiz 페이지로 이동
// TODO: 서버에게 getQuizs 요청 -> modules/quizzes를 통해 요청
