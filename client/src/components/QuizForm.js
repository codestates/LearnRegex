import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../modules/modal';
import Interweave from 'interweave';
import style from './devQuizFormStyle.css';
import { saveAnswerTutorial, saveAnswerQuiz } from '../modules/answer';
import { clearList } from '../modules/list';
import { requestQuizClear } from '../lib/requestQuiz';

function QuizForm({ data, orderPage }) {
  //TODO 리덕스 구조가 변경됐을 때 에러발생.
  // ? 에러가 발생하면 로컬스토리지를 초기화 해야될까?
  const text = useSelector((state) => (orderPage === 'tutorial' ? state.answer.tutorial[data.id] : state.answer.quiz[data.id]));
  const isLogin = useSelector((state) => state.isLogin);
  const [inputRegex, setInputRegex] = useState(text || '');
  const dispatch = useDispatch();

  useEffect(() => {
    setInputRegex(text || '');
  }, [data]);

  const saveLocal = (text) => {
    orderPage === 'tutorial' ? dispatch(saveAnswerTutorial(data.id, text)) : dispatch(saveAnswerQuiz(data.id, text));
  };

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
      myRegex = new RegExp('^$', 'g');
    }
    console.log('myRegex:', myRegex);

    // * Realtime CSS
    let startIndex = 0;
    let lastIndex = 0;
    let result = '';
    let matchArray = myRegex.exec(testCase);
    if (Array.isArray(matchArray)) {
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
    // 퀴즈에서 로그인한 회원이 처음 문제를 풀었을 경우 서버 요청
    if (orderPage === 'quizList' && isCorrectReg && isLogin && !data.isClear) requestQuizClear(data.id);

    // 학습하기에서 문제를 풀었을 경우 상태 저장
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
          <button
            onClick={() => {
              orderPage === 'quizList' ? dispatch(setModal('quizAnswer')) : dispatch(setModal('tutorialAnswer'));
            }}
          >
            {orderPage === 'quizList' ? '정답 확인하기' : '도움이 필요합니다'}
          </button>
        </div>
      </div>
    </>
  );
}

export default QuizForm;
