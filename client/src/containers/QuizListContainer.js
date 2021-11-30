import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizzes } from '../modules/quizzes';
import QuizList from '../pages/QuizList';

function QuizListContainer() {
  const { data } = useSelector((state) => state.quizzes.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizzes());
  }, [dispatch]);

  return <QuizList list={data} />;
}

export default QuizListContainer;
