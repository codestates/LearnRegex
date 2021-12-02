import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveAnswer } from '../modules/answer';

// ! page = "solve"인 이유: SolvePage로부터 받아와졌다고 가정하고 구현
// TODO: Tutorial, SolveQuiz 페이지 구현 후 page = "solve"에서 page로 수정
function QuizForm({ testCase, testCaseTarget, answer, explanation, page }) {
  const { text } = useSelector((state) => state.answer);
  const [result, setResult] = useState(text);
  const dispatch = useDispatch();

  const saveLocal = (text) => dispatch(saveAnswer(text));

  const handleAnswer = (e) => {
    setResult(e.target.value);
  };

  const handleModal = () => {
    // TODO: button 클릭시 QuizAnswerModal에게 상속 받은 answer, explanation를 props로 전달
  };

  const timeWait = useRef();
  useEffect(() => {
    clearTimeout(timeWait.current);
    timeWait.current = setTimeout(() => {
      saveLocal(result);
    }, 2000);
  }, [result]);

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
            <input type="text" value={result || ''} placeholder="정규표현식을 입력하세요!" onChange={handleAnswer} />
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
