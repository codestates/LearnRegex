import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getQuiz } from '../modules/quiz';
import QuizForm from '../components/QuizForm';
import { ImArrowLeft2 } from 'react-icons/im';

function SolveQuiz() {
  const { id } = useParams('id');
  const { data } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuiz(id));
  }, [id, dispatch]);

  return (
    <>
      <div>
        <ImArrowLeft2 size="50" />
        <QuizForm />
        {/* TODO: 서버 구현되면 아래 주석 풀기 */}
        {/* <QuizForm testCase={data.tesCase} testCaseTarget={data.testCaseTarget} answer={data.answer} page={"solve"} /> */}
      </div>
    </>
  );
}

export default SolveQuiz;
