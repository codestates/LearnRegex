import React from 'react';
import InputQuiz from '../../components/InputQuiz';
import { Container } from './MakeQuiz.styled';

function MakeQuiz() {
  return (
    <>
      <Container>
        <InputQuiz data={null} />
      </Container>
    </>
  );
}

export default MakeQuiz;
