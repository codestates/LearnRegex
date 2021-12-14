import React from 'react';
import styled from 'styled-components';

export const Input = styled.input.attrs({})`
  outline: none;
  border: 1px solid ${({ isEmpty }) => (isEmpty ? 'red' : 'black')};
`;

export const Textarea = styled.textarea.attrs({})`
  outline: none;
  border: 1px solid ${({ isEmpty }) => (isEmpty ? 'red' : 'black')};
`;

// ! ---------------------------- 테스트케이스 입력창 -----------------
export const InputTestCase = ({ testCases, handleInputTestCase, handleTaskButton }) => {
  return (
    <div>
      {testCases.map((testCase, idx) => {
        return (
          <div>
            <h3>
              📍testCase_{idx}_
              <button type="button" onClick={handleTaskButton(idx)}>
                {testCase.task}
              </button>
            </h3>
            <Textarea value={testCase.target} placeholder="testCase를 입력하세요" maxLength="400" onChange={handleInputTestCase(idx)} />
          </div>
        );
      })}
    </div>
  );
};

export default InputTestCase;
