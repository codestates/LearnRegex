import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import InputQuiz from '../../components/InputQuiz';
import { getQuiz } from '../../modules/quiz/getquiz';
import { checkUserIsLogin } from '../../lib/checkIsLogin';

function EditQuiz() {
  if (!checkUserIsLogin()) window.location.replace('/');
  const { id } = useParams('id');
  const { data } = useSelector((state) => state.getquiz.quiz);
  const dispatch = useDispatch();

  useEffect(() => {
    const quiz = getQuiz(id);
    console.log(quiz);
    if (!data) window.location.replace(`/quiz/${id}`);
    dispatch(quiz);
  }, [id]);

  return (
    <>
      <h3>InputQuiz</h3>
      <InputQuiz data={data} />
    </>
  );
}

export default EditQuiz;
