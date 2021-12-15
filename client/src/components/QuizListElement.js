import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChallengeButton } from '../styles/button/ChallengeButton.styled';
import { Container, Title, Nickname, Cnt } from './QuizListElement.styled';

function QuizListElement({ data }) {
  const navigate = useNavigate();

  const handleLink = () => {
    navigate(`/quiz/${data.id}`);
  };

  return (
    <>
      <Container>
        <div className="content">
          <Title>{data.title}</Title>
          <Nickname nickname>{data.nickname}</Nickname>
          <Cnt cnt>
            이 퀴즈를 <span>{data.count}</span>명이 풀었습니다!
          </Cnt>
        </div>
        <div className="buttonBox" onClick={handleLink}>
          <ChallengeButton isClear={data.isClear}>도전하기</ChallengeButton>
        </div>
      </Container>
    </>
  );
}

export default QuizListElement;
