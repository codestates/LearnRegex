import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../modules/modal';
import { saveAnswerTutorial, saveAnswerQuiz } from '../modules/answer';
import { clearList } from '../modules/list';
import { requestQuizClear } from '../lib/requestQuiz';
import ShowTestCase from './ShowTestCase';
import { Container, Span, Input, AnswerButton } from './QuizForm.styled';
import { ShowTestCaseContainer } from '../styles/TestCase.styled';

function QuizForm({ data, orderPage }) {
  //TODO 리덕스 구조가 변경됐을 때 에러발생.
  // ? 에러가 발생하면 로컬스토리지를 초기화 해야될까?
  const previousRegex = useSelector((state) => (orderPage === 'tutorial' ? state.answer.tutorial[data.id] : state.answer.quiz[data.id]));
  const isLogin = useSelector((state) => state.isLogin);
  const tutorialClearList = useSelector((state) => state.list);
  const [inputRegex, setInputRegex] = useState(previousRegex || '');
  const [isCorrectRegTotal, setIsCorrectRegTotal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setInputRegex(previousRegex || '');
  }, [data]);

  const handleAnswer = (e) => {
    setInputRegex(e.target.value);
  };

  const handleIsCorrectRegTotal = (e) => {
    const result = e.indexOf(false) === -1;
    console.log(isCorrectRegTotal);

    // if (isCorrectRegTotal) return;
    if (result !== isCorrectRegTotal) setIsCorrectRegTotal(result);
  };

  //! ------------------------ 정답일 경우 서버 전송 ------------------------
  const saveLocal = (text) => {
    orderPage === 'tutorial' ? dispatch(saveAnswerTutorial(data.id, text)) : dispatch(saveAnswerQuiz(data.id, text));
  };
  const timeWait = useRef();
  useEffect(() => {
    clearTimeout(timeWait.current);
    timeWait.current = setTimeout(() => {
      saveLocal(inputRegex);
    }, 1000);
  }, [inputRegex]);

  useEffect(() => {
    // 퀴즈에서 로그인한 회원이 처음 문제를 풀었을 경우 서버 요청
    if (orderPage === 'quizList' && isCorrectRegTotal && isLogin && !data.isClear) {
      data.isClear = true;
      requestQuizClear(data.id);
    }

    // 학습하기에서 문제를 풀었을 경우 상태 저장
    if (orderPage === 'tutorial' && isCorrectRegTotal && !tutorialClearList[data.id - 1]) dispatch(clearList(data.id - 1));
  }, [isCorrectRegTotal]);

  //! ------------------------ HTML 태그 출력 ------------------------
  return (
    <>
      <Container>
        <Span>Test Case</Span>
        <ShowTestCaseContainer>
          <ShowTestCase testCases={data.testCase} inputRegex={inputRegex} handleIsCorrectRegTotal={handleIsCorrectRegTotal} />
        </ShowTestCaseContainer>
        <Span>My Regexp</Span>
        <Input value={inputRegex} placeholder="정규표현식을 입력하세요!" onChange={handleAnswer} size="100" />
        <AnswerButton
          onClick={() => {
            orderPage === 'quizList' //
              ? dispatch(setModal('quizAnswer')) //
              : dispatch(setModal('tutorialAnswer'));
          }}
        >
          {orderPage === 'quizList' //
            ? '정답 확인하기' //
            : '도움이 필요합니다'}
        </AnswerButton>
      </Container>
    </>
  );
}

export default QuizForm;
