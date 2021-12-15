import React from 'react';
import { Link } from 'react-router-dom';
import { ChallengeButton } from '../styles/button/ChallengeButton.styled';

function QuizListElement({ data }) {
  return (
    <>
      <div className="container">
        <div>
          <div>제목: {data.title}</div>
          <div>출제자: {data.nickname}</div>
          <div>이 퀴즈를 {data.count} 명이 풀었습니다!</div>
        </div>
        <div>
          <ChallengeButton isClear={data.isClear}>
            <Link to={`/quiz/${data.id}`}>도전하기</Link>
          </ChallengeButton>
        </div>
      </div>
    </>
  );
}

export default QuizListElement;
