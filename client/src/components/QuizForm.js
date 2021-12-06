import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Interweave from 'interweave';
import style from './devQuizFormStyle.css';
import { saveAnswer } from '../modules/answer';
import { clearList } from '../modules/list';
import requestQuizClear from '../lib/requestQuizClear';

function QuizForm({ data, orderPage }) {
  const { text } = useSelector((state) => state.answer);
  const [inputRegex, setInputRegex] = useState(text);
  const dispatch = useDispatch();
  console.log(text);

  const handleModal = () => {
    // TODO: button 클릭시 QuizAnswerModal에게 상속 받은 data.answer, data.explanation를 props로 전달
  };

  const saveLocal = (regex) => dispatch(saveAnswer(regex));

  const handleAnswer = (e) => {
    setInputRegex(e.target.value);
  };

  //! ------------------------ 정규표현식 실시간 적용 ------------------------
  // * 정규표현식 분류
  let highlightedTestCase = '';
  const getRegExp = (testCase) => {
    // * 정규표현식 만들기
    let myRegex = '';
    try {
      const flags = 'g';
      const pattern = inputRegex || '^$';
      myRegex = new RegExp(pattern, flags);
    } catch (e) {
      console.log(e);
      myRegex = new RegExp('^$', 'g');
    }
    console.log('myRegex:', myRegex);

    // * Realtime CSS
    let matchArray;
    let startIndex = 0;
    let lastIndex = 0;
    let result = '';
    if ((matchArray = myRegex.exec(testCase)) !== null) {
      lastIndex = matchArray.index;
      highlightedTestCase += data.testCase.substring(startIndex, lastIndex);
      highlightedTestCase += "<span class='found'>" + matchArray[0] + '</span>';
      startIndex = myRegex.lastIndex;
      result = matchArray[0];
    }
    highlightedTestCase += data.testCase.substring(startIndex, data.testCase.length);
    return result;
  };
  // * 정규표현식 적용 결과
  let regExpResult = getRegExp(data.testCase);

  let isCorrectReg = regExpResult === data.testCaseTarget;
  const timeWait = useRef();
  useEffect(() => {
    clearTimeout(timeWait.current);
    timeWait.current = setTimeout(() => {
      saveLocal(inputRegex);
    }, 1000);
  }, [inputRegex]);
  //! ------------------------ 정규표현식 실시간 적용 ------------------------

  useEffect(() => {
    // console.log(isCorrectReg);
    if (orderPage === 'quizList' && isCorrectReg) requestQuizClear(data.id);
    if (orderPage === 'tutorial' && isCorrectReg) dispatch(clearList(data.id - 1));
  }, [isCorrectReg]);

  return (
    <>
      <div>
        <div>
          <h2>Test Case</h2>
          <div>
            <Interweave content={highlightedTestCase} />
          </div>
          <h2>Test Case Target</h2>
          <div>
            <span>{data.testCaseTarget}</span>
            <div>{isCorrectReg ? '✅' : '❌'}</div>
          </div>
        </div>
        <div>
          <h2>My Regexp</h2>
          <div>
            <span>{regExpResult}</span>
          </div>
          <div>
            <input type="text" value={inputRegex} placeholder="정규표현식을 입력하세요!" onChange={handleAnswer} size="100" />
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
