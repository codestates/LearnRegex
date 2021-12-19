import React from 'react';
import { TestCaseBox, TaskElement, MinusTestCaseButton, InputText } from '../styles/TestCase.styled';

// ! ---------------------------- 테스트케이스 입력창 -----------------
export const InputTestCase = ({ testCases, handleInputTestCase, handleTaskButton, handleTestCaseQuantity }) => {
  let color = 'black';
  return (
    <>
      {testCases.map((testCase, idx) => {
        if (testCase.task === 'match') color = 'green';
        else if (testCase.task === 'skip') color = 'red';
        else if (testCase.task === 'capture') color = 'brown';
        else color = 'yellow';
        return (
          <>
            {/* <h3>📍testCase_{idx}_ </h3> */}
            <TestCaseBox>
              <TaskElement color={color} onClick={handleTaskButton(idx)}>
                {testCase.task}
              </TaskElement>
              <InputText value={testCase.target} placeholder="testCase를 입력하세요" maxLength="40" onChange={handleInputTestCase(idx)} />
              <MinusTestCaseButton onClick={handleTestCaseQuantity('delete', idx)} />
            </TestCaseBox>
          </>
        );
      })}
    </>
  );
};

export default InputTestCase;
