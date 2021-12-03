import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import InputQuiz from '../../components/InputQuiz';
import { getQuiz } from '../../modules/quiz/getquiz';

function EditQuiz() {
  const { id } = useParams('id');
  const { data } = useSelector((state) => state.quiz.quiz);
  // console.log('---EDITQUIZ---');
  // console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuiz(id));
  }, [id]);

  if (!data) return <div>loading....</div>;

  return (
    <>
      <InputQuiz data={data} />
    </>
  );
}

export default EditQuiz;
