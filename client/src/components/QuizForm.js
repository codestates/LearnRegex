import React from 'react';

function QuizForm({ testCase, testCaseTarget, answer, page = 'solve' }) {
  // ! page = "solve"인 이유: SolvePage로부터 받아와졌다고 가정하고 구현
  // TODO: Tutorial, SolveQuiz 페이지 구현 후 page = "solve"에서 page로 수정

  const handleModal = () => {
    // TODO: button 클릭시 QuizAnswerModal에게 상속 받은 answer를 props로 전달
  };

  return (
    <>
      <div>
        <div>
          <h2>Test Case</h2>
          <div>
            <span>예시: {testCase}</span>
          </div>
          <div>
            <span>예시: {testCaseTarget}</span>
            <div>❌ | ✅</div>
          </div>
        </div>
        <div>
          <h2>My Regexp</h2>
          <div>
            <span>입력한 정규표현식을 Test Case에 적용한 걸 실시간으로 보여주는 곳</span>
          </div>
          <div>
            <input type="text" placeholder="정규표현식을 입력하세요!" />
          </div>
        </div>
        <div>
          <button onClick={handleModal}>{page === 'solve' ? '정답 확인하기' : '도움이 필요합니다'}</button>
        </div>
      </div>
    </>
  );
}

export default QuizForm;
