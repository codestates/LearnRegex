import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizzes } from '../../modules/quiz/getquizzes';
import QuizListElement from '../../components/QuizListElement';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';

function QuizList() {
  const { isLogin } = useSelector((state) => state.isLogin);
  const { data } = useSelector((state) => state.getquizzes.list);
  // console.log(data);
  const dispatch = useDispatch();

  const handleAlert = () => {
    alert('로그인 후 이용하세요!');
  };

  useEffect(() => {
    dispatch(getQuizzes());
  }, [dispatch]);

  if (!data) return <div>loading....</div>;

  return (
    <>
      {isLogin ? (
        <Link to="/makequiz">
          <BsPencilSquare size="50" />
        </Link>
      ) : (
        <BsPencilSquare onClick={handleAlert} size="50" />
      )}
      {data.map((el) => (
        <QuizListElement key={el.id} data={el} />
      ))}
    </>
  );
}

export default QuizList;
