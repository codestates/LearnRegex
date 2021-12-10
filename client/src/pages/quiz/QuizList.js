import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import QuizListElement from '../../components/QuizListElement';
import Pagenate from '../../components/Paginate';
import { getQuizzes } from '../../modules/quiz/getquizzes';
import { BsPencilSquare } from 'react-icons/bs';

function QuizList() {
  const { isLogin } = useSelector((state) => state.isLogin);
  const { data } = useSelector((state) => state.getquizzes.list);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAlert = () => {
    if (!!isLogin) {
      navigate('/makequiz');
    } else {
      alert('로그인 후 이용하세요!');
    }
  };

  return (
    <>
      <BsPencilSquare onClick={handleAlert} size="50" />
      {!data ? <div>loading</div> : data.map((el) => <QuizListElement key={el.id} data={el} />)}

      <Pagenate />
    </>
  );
}

export default QuizList;
