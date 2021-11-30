import React from 'react';
import QuizListElement from '../components/QuizListElement';

function QuizList({ list }) {
  // TODO: 글쓰기 icon 삽입 -> 클릭하면 MakeQuiz 페이지로 이동
  return (
    <>
      {/* TODO: QuizListElement에게 상속 받은 list의 id, title, nickname, count, isClear 전달하기 */}
      <QuizListElement id={1} title={'제목이당'} nickname={'김코딩'} count={3} isClear={true} />
    </>
  );
}

export default QuizList;
