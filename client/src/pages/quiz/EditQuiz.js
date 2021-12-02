import React from 'react';
import { useSelector } from 'react-redux';
import InputQuiz from '../../components/InputQuiz';

function EditQuiz() {
  const { data } = useSelector((state) => state.quiz.quiz);
  console.log('---EDITQUIZ---');
  console.log(data);

  return (
    <>
      <InputQuiz data={data} />
    </>
  );
}

export default EditQuiz;
