import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Nickname, Cnt, Button } from './QuizListElement.styled';

function QuizListElement({ data }) {
  return (
    <>
      <Container>
        <Title>{data.title}</Title>
        <Nickname nickname>{data.nickname}</Nickname>
        <Cnt cnt>
          이 퀴즈를 <span>{data.count}</span>명이 풀었습니다!
        </Cnt>
        <Button isClear={data.isClear}>
          <Link to={`/quiz/${data.id}`}>도전하기</Link>
        </Button>
      </Container>
    </>
  );
}

export default QuizListElement;
