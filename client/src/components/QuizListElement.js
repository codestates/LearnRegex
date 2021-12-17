import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Nickname, Cnt, Button } from './QuizListElement.styled';

function QuizListElement({ data }) {
  const navigate = useNavigate();

  const handleLink = () => {
    navigate(`/quiz/${data.id}`);
  };

  return (
    <>
      <Container>
        <Title>{data.title}</Title>
        <Nickname nickname>{data.nickname}</Nickname>
        <Cnt cnt>
          이 퀴즈를 <span>{data.count}</span>명이 풀었습니다!
        </Cnt>
        <Button isClear={data.isClear} onClick={handleLink}>
          도전하기
        </Button>
      </Container>
    </>
  );
}

export default QuizListElement;
