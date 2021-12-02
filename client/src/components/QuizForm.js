import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveAnswer } from '../modules/answer';

function QuizForm({ data, page }) {
  const { text } = useSelector((state) => state.answer);
  const [result, setResult] = useState(text);
  const dispatch = useDispatch();

  const saveLocal = (text) => dispatch(saveAnswer(text));

  const handleAnswer = (e) => {
    setResult(e.target.value);
  };

  const handleModal = () => {
    // TODO: button 클릭시 QuizAnswerModal에게 상속 받은 data.answer, data.explanation를 props로 전달
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
            <span>예시: {data.testCase}</span>
          </div>
          <div>
            <span>예시: {data.testCaseTarget}</span>
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
