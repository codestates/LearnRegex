import React, { useEffect } from 'react';
import { TestCaseBox, TaskElement, MinusTestCaseButton, InputText } from '../styles/TestCase.styled';

// ! ---------------------------- 테스트케이스 입력창 -----------------
export const InputTestCase = ({ isStart, setIsStart, testCases, handleInputTestCase, handleTaskButton, handleTestCaseQuantity }) => {
  let color = 'black';

  useEffect(() => {
    if (isStart === true) {
      setTimeout(() => {
        setIsStart(false);
      }, 3000);
    }
  }, []);

  return (
    <>
      {testCases.map((testCase, idx) => {
        if (testCase.task === 'match') color = 'green';
        else if (testCase.task === 'skip') color = 'red';
        else if (testCase.task === 'capture') color = 'brown';
        else color = 'yellow';
        return (
          <>
            <TestCaseBox>
              <TaskElement inputQuiz color={color} onClick={handleTaskButton(idx)} blinkColor={color} isStart={idx === 0 ? isStart : false}>
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
