import React from 'react';
import { Link } from 'react-router-dom';
import { ChallengeButton } from '../styles/button/ChallengeButton.styled';
import { Container, Title, Nickname, Cnt } from './QuizListElement.styled';

function QuizListElement({ data }) {
  return (
    <>
      <Container>
        <div className="content">
          <Title>
            <Link to={`/quiz/${data.id}`}>{data.title}</Link>
          </Title>

          <span className="tooltip">{data.title}</span>
          <Nickname nickname>{data.nickname}</Nickname>
          <Cnt cnt>
            이 퀴즈를 <span>{data.count}</span>명이 풀었습니다!
          </Cnt>
        </div>
        <div className="buttonBox">
          <ChallengeButton isClear={data.isClear}>
            <Link to={`/quiz/${data.id}`}>도전하기</Link>
          </ChallengeButton>
        </div>
      </Container>
    </>
  );
}

export default QuizListElement;
