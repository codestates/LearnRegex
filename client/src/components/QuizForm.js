import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveAnswer } from '../modules/answer';
import requestQuizClear from '../lib/requestQuizClear';

function QuizForm({ data, orderPage }) {
  const { text } = useSelector((state) => state.answer);
  const [inputRegex, setInputRegex] = useState(text);
  const dispatch = useDispatch();

  const saveLocal = (text) => dispatch(saveAnswer(text));

  const handleAnswer = (e) => {
    setInputRegex(e.target.value);
  };

  const handleModal = () => {
    // TODO: button 클릭시 QuizAnswerModal에게 상속 받은 data.answer, data.explanation를 props로 전달
  };

  // * 정규표현식 분류
  let highlightedTestCase = '<pre>{`';
  const getRegExp = (testCase) => {
    // 잘못된 정규표현식이 들어오면 빈 문자열 반환
    try {
      // flag와 pattern 분리
      // replace 함수 두 번째 인자로 '$1' 값을 부여해서 소괄호로 묶인 첫 번째 그룹을 가져올 수 있다.
      // const flags = inputRegex.replace(/.*\/([gimy]*)$/, '$1');
      const flags = 'g';
      // replace 함수 안에서 flags 변수를 합쳐서 정규표현식을 만듦
      // 방금 만든 정규표현식으로 inputRegex 내부 패턴값을 소괄호로 묶어서 추출
      // const pattern = inputRegex.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1');
      const pattern = inputRegex;
      const myRegex = new RegExp(pattern, flags);
      console.log(myRegex);

      let matchArray;
      let startIndex = 0;
      let lastIndex = 0;
      while ((matchArray = myRegex.exec(testCase)) !== null) {
        lastIndex = matchArray.index;
        highlightedTestCase += data.testCase.substring(startIndex, lastIndex);
        highlightedTestCase += "<span class='found'>" + matchArray[0] + '</span>';
        startIndex = myRegex.lastIndex;
      }
      highlightedTestCase += data.testCase.substring(startIndex, data.testCase.length);
      highlightedTestCase += '`}</pre>';
      // const myRegexExec = myRegex.exec(testCase);
      // console.log(myRegexExec);
      // console.log(myRegex.lastIndex);
      // return myRegexExec;
    } catch (e) {
      console.log(e);
      return '';
    }
  };
  // * 정규표현식 적용 결과
  let regExpResult = getRegExp(data.testCase);
  if (Array.isArray(regExpResult)) {
    regExpResult = regExpResult[0];
  }

  let isCorrectReg = regExpResult === data.testCaseTarget;
  const timeWait = useRef();
  useEffect(() => {
    clearTimeout(timeWait.current);
    timeWait.current = setTimeout(() => {
      saveLocal(inputRegex);
      if (orderPage === 'quizList' && isCorrectReg) requestQuizClear(data.id);
    }, 2000);
  }, [inputRegex]);

  return (
    <>
      <div>
        <div>
          <h2>Test Case</h2>
          <div>
            <span>{highlightedTestCase}</span>
          </div>
          <h2>Test Case Target</h2>
          <div>
            data.testCaseTarget
            <div>{isCorrectReg ? '✅' : '❌'}</div>
          </div>
        </div>
        <div>
          <h2>My Regexp</h2>
          <div>
            <span>{regExpResult}</span>
          </div>
          <div>
            <input type="text" value={inputRegex || ''} placeholder="정규표현식을 입력하세요!" onChange={handleAnswer} size="100" />
          </div>
        </div>
        <div>
          <button onClick={handleModal}>{orderPage === 'quizList' ? '정답 확인하기' : '도움이 필요합니다'}</button>
        </div>
      </div>
    </>
  );
}

export default QuizForm;
