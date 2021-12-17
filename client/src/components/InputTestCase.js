import React from 'react';
import styled from 'styled-components';
import { Container, TaskElement } from './InputQuiz.styled';

export const Input = styled.input.attrs({})`
  outline: none;
  border: 1px solid ${({ isEmpty }) => (isEmpty ? 'red' : 'black')};
`;

export const Textarea = styled.textarea.attrs({})`
  outline: none;
  border: 1px solid ${({ isEmpty }) => (isEmpty ? 'red' : 'black')};
`;

// ! ---------------------------- 테스트케이스 입력창 -----------------
export const InputTestCase = ({ testCases, handleInputTestCase, handleTaskButton, handleTestCaseQuantity }) => {
  let color = 'black';
  return (
    <Container>
      {testCases.map((testCase, idx) => {
        if (testCase.task === 'match') color = 'green';
        else if (testCase.task === 'skip') color = 'red';
        else if (testCase.task === 'capture') color = 'brown';
        else color = 'yellow';
        return (
          <div>
            <h3>
              📍testCase_{idx}_
              <TaskElement color={color} onClick={handleTaskButton(idx)}>
                {testCase.task}
              </TaskElement>
            </h3>
            <Textarea value={testCase.target} placeholder="testCase를 입력하세요" maxLength="400" onChange={handleInputTestCase(idx)} />
            <button type="button" onClick={handleTestCaseQuantity('delete', idx)}>
              ➖
            </button>
          </div>
        );
      })}
    </Container>
  );
};

export default InputTestCase;
