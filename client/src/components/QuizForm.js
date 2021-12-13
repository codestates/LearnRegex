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
  const previousRegex = useSelector((state) => (orderPage === 'tutorial' ? state.answer.tutorial[data.id] : state.answer.quiz[data.id]));
  const isLogin = useSelector((state) => state.isLogin);
  const [inputRegex, setInputRegex] = useState(previousRegex || '');
  const dispatch = useDispatch();

  useEffect(() => {
    setInputRegex(previousRegex || '');
  }, [data]);

  const handleAnswer = (e) => {
    setInputRegex(e.target.value);
  };

  //! ------------------------ 정규표현식 실시간 적용 ------------------------
  const realtimeRegex = (testCase) => {
    const getMyRegex = (inputRegex) => {
      // * Create myRegex
      let myRegex;
      const flags = 'g';
      const pattern = inputRegex || '^$';
      try {
        myRegex = new RegExp(pattern, flags);
      } catch (e) {
        myRegex = new RegExp('^$', flags);
      }
      return myRegex;
    };
    const myRegex = getMyRegex(inputRegex);

    // * Realtime CSS
    let startIndex = 0,
      lastIndex = 0,
      highlightedTestCase = '',
      matchArray = myRegex.exec(testCase.target[0]);
    if (Array.isArray(matchArray)) {
      lastIndex = matchArray.index;
      highlightedTestCase += testCase.target[0].substring(startIndex, lastIndex);
      highlightedTestCase += "<span class='found'>" + matchArray[0] + '</span>';
      startIndex = myRegex.lastIndex;
    }
    highlightedTestCase += testCase.target[0].substring(startIndex, testCase.target[0].length);
    return { highlightedTestCase, matchArray };
  };

  // * Groups 출력
  // const realtimeGroups = (target, isCorrectRegGroups) => {
  //   return;
  // };

  //! ------------------------ 정규표현식 실시간 적용 ------------------------
  console.log(data.testCase);
  const isCorrectRegTotal = [];
  const testCases = data.testCase.map((testCase) => {
    let regExpResult = realtimeRegex(testCase);
    let regExpResultGroups;
    let isCorrectReg = false;
    let isCorrectRegGroups = Array(testCase.target.length).fill(false);
    const matchArray = regExpResult.matchArray;
    const isValidRegex = Array.isArray(matchArray);

    // * Task별로 구분
    if (testCase.task === 'match') {
      if (isValidRegex) isCorrectReg = regExpResult.matchArray[0] === testCase.target[0];
    } else if (testCase.task === 'skip') {
      if (!isValidRegex) isCorrectReg = true;
    } else if (testCase.task === 'capture') {
      if (isValidRegex) {
        isCorrectRegGroups = testCase.target.map((group, idx) => group === regExpResult.matchArray[idx]);
        isCorrectReg = isCorrectRegGroups.indexOf(false) === -1;
      }
    }
    if (isCorrectReg) isCorrectRegTotal.push(true);
    else isCorrectRegTotal.push(false);

    console.log(regExpResult.matchArray);
    console.log(isCorrectRegGroups);
    // * 출력
    return (
      <>
        <div>
          <h2>📍{testCase.task}</h2>
        </div>
        <div>
          <Interweave content={regExpResult.highlightedTestCase} />
          {isCorrectReg ? '✅' : '❌'}
          {testCase.task === 'capture' ? (
            testCase.target.slice(1).map((el, idx) => {
              return isCorrectRegGroups[idx + 1] ? <p class="found">{el}</p> : <p>{el}</p>;
            })
          ) : (
            <></>
          )}
        </div>
        <hr />
      </>
    );
  });
  console.log(isCorrectRegTotal);

  //! ------------------------ 정답일 경우 서버 전송 ------------------------
  const saveLocal = (text) => {
    orderPage === 'tutorial' ? dispatch(saveAnswerTutorial(data.id, text)) : dispatch(saveAnswerQuiz(data.id, text));
  };
  const timeWait = useRef();
  const isAllCorrectReg = isCorrectRegTotal.indexOf(false) === -1;
  useEffect(() => {
    clearTimeout(timeWait.current);
    timeWait.current = setTimeout(() => {
      saveLocal(inputRegex);
    }, 1000);
  }, [inputRegex]);

  useEffect(() => {
    // 퀴즈에서 로그인한 회원이 처음 문제를 풀었을 경우 서버 요청
    if (orderPage === 'quizList' && isAllCorrectReg && isLogin && !data.isClear) requestQuizClear(data.id);

    // 학습하기에서 문제를 풀었을 경우 상태 저장
    if (orderPage === 'tutorial' && isAllCorrectReg) dispatch(clearList(data.id - 1));
  }, [isAllCorrectReg]);
  console.log(data);

  //! ------------------------ HTML 태그 출력 ------------------------
  return (
    <>
      <div>
        <div>
          <h2>Test Case</h2>
          <div>{testCases}</div>
          <div>{/*  */}</div>
        </div>
        <div>
          <h2>My Regexp</h2>
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
