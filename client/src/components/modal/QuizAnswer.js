import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { dummyData } from '../../data/tutorialData';
import styled from 'styled-components';
import { Button } from '../../styles/button/CommonButton.styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  width: 100%;

  button {
    justify-content: center;
    margin: auto;
    width: 14rem;
  }
`;

export const Span = styled.span`
  margin-bottom: ${(prop) => prop.margin}rem;
  font-size: ${(prop) => prop.size}rem;
  color: ${(prop) => `var(--color-${prop.color})`};
  font-family: ${(prop) => prop.family};
  white-space: pre-line;
  word-break: break-all;
`;

const QuizAnswer = () => {
  const { modalType } = useSelector((state) => state.modal);
  const { index } = useSelector((state) => state.bookmark);
  const { answer, explanation } = useSelector((state) => state.getquiz.quiz.data || { answer: '', explanation: '' });
  const tutorialAnswer = dummyData[index].answer;
  const tutorialExplanation = dummyData[index].explanation;
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <Span size={2} margin={0.3} color={'blue'} family={'IBMPlexSansKR-Semibold'}>
          정답
        </Span>
        <Span size={1.2} margin={1.4} family={'D2Coding'}>
          {modalType === 'quizAnswer' ? answer : tutorialAnswer}
        </Span>
        <Span size={2} margin={0.3} color={'blue'} family={'IBMPlexSansKR-Semibold'}>
          해설
        </Span>
        <Span margin={2}>{modalType === 'quizAnswer' ? explanation : tutorialExplanation}</Span>
        <Button onClick={() => dispatch(setModal('close'))}>Got it!</Button>
      </Container>
    </>
  );
};

export default QuizAnswer;
