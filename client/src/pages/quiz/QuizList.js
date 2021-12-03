import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizzes } from '../../modules/quiz/getquizzes';
import QuizListElement from '../../components/QuizListElement';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';

function QuizList() {
  const { data } = useSelector((state) => state.getquizzes.list);
  // console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizzes());
  }, [dispatch]);

  if (!data) return <div>loading....</div>;

  return (
    <>
      <Link to="/makequiz">
        <BsPencilSquare size="50" />
      </Link>
      {data.map((el) => (
        <QuizListElement key={el.id} data={el} />
      ))}
    </>
  );
}

export default QuizList;
