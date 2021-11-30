import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuizList from '../pages/QuizList';
import { getQuizzes } from '../modules/quizzes';

function QuizListContainer() {
  const { data } = useSelector((state) => state.quizzes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizzes());
  }, [dispatch]);

  return <QuizList list={data} />;
}

export default QuizListContainer;
