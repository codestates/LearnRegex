import React from 'react';
import { Link } from 'react-router-dom';

function QuizListElement({ id, title, nickname, count, isClear }) {
  // TODO: isClear의 값에 따라 button props 다르게 전달하기 -> 도전하기 색상 변경
  // TODO: button 클릭 시 QuizSolve 페이지로 이동 -> id props로 전달

  return (
    <>
      <div className="container">
        <div>
          <div>제목: {title}</div>
          <div>출제자: {nickname}</div>
          <div>이 퀴즈를 {count} 명이 풀었습니다!</div>
        </div>
        <div>
          <button>
            <Link to={`/quiz/${id}`}>도전하기</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default QuizListElement;
