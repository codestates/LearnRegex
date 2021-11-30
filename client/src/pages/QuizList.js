import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizzes } from '../modules/quizzes';
import QuizListElement from '../components/QuizListElement';

function QuizList() {
  const { data } = useSelector((state) => state.quizzes.list);
  // console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizzes());
  }, [dispatch]);

  // TODO: 글쓰기 icon 삽입 -> 클릭하면 MakeQuiz 페이지로 이동

  return (
    <>
      {/* TODO: QuizListElement에게 data의 id, title, nickname, count, isClear 전달하기 */}
      <QuizListElement id={1} title={'제목이당'} nickname={'김코딩'} count={3} isClear={true} />
    </>
  );
}

export default QuizList;
