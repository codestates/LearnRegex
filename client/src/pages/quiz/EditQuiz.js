import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import InputQuiz from '../../components/InputQuiz';
import { getQuiz } from '../../modules/quiz/getquiz';

function EditQuiz() {
  const { id } = useParams('id');
  const { data } = useSelector((state) => state.getquiz.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getQuiz(id));
  }, [id]);

  if (!data) return <>{navigate(`/quiz/${id}`)}</>;

  return (
    <>
      <InputQuiz data={data} />
    </>
  );
}

export default EditQuiz;
