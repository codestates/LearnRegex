import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import InputQuiz from '../../components/InputQuiz';
import { getQuiz } from '../../modules/quiz/getquiz';
import { checkUserIsLogin } from '../../lib/checkIsLogin';
import { Container } from './MakeQuiz.styled';

function EditQuiz() {
  if (!checkUserIsLogin()) window.location.replace('/');
  const { id } = useParams('id');
  const { data } = useSelector((state) => state.getquiz.quiz);
  const dispatch = useDispatch();

  useEffect(() => {
    const quiz = getQuiz(id);
    console.log(quiz);
    if (!data) window.history.back();
    dispatch(quiz);
  }, [id]);

  return (
    <>
      <Container>
        <InputQuiz data={data} />
      </Container>
    </>
  );
}

export default EditQuiz;
