import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import { submitQuiz } from '../lib/requestQuiz';
import { limitChar } from '../lib/limitChar';
import styled from 'styled-components';
import { checkUserIsLogin } from '../lib/checkIsLogin';
import ShowTestCase from './ShowTestCase';
import InputTestCase from './InputTestCase';

export const Input = styled.input.attrs({})`
  outline: none;
  border: 1px solid ${({ isEmpty }) => (isEmpty ? 'red' : 'black')};
`;

export const Textarea = styled.textarea.attrs({})`
  outline: none;
  border: 1px solid ${({ isEmpty }) => (isEmpty ? 'red' : 'black')};
`;

function InputQuiz({ data }) {
  if (!checkUserIsLogin()) window.location.replace('/');
  const makeTestCase = () => {
    return { task: 'match', target: '', groups: [] };
  };
  const [content, setContent] = useState({
    title: '',
    testCase: [makeTestCase()],
    answer: '',
    explanation: '',
  });
  const [isEmpty, setIsEmpty] = useState({
    title: false,
    testCase: false,
    answer: false,
    explanation: false,
  });
  const [focusTestCase, setFocusTestCase] = useState(true);
  const [isCorrectRegTotal, setIsCorrectRegTotal] = useState(false);

  // * --------- 텍스트창 입력 ---------
  const handleInputValue = (key) => (e) => {
    if (isEmpty[key] === true) setIsEmpty({ ...isEmpty, [key]: false }); // 빈 칸이었다가 무언가 입력 시  빨간 테두리 사라짐
    let result = limitChar(e.target.value.length, e.target.maxLength);

    if (!!result) setContent({ ...content, [key]: e.target.value });
  };

  // ! ---------------------------- 테스트케이스 입력 -------------------------
  const handleTaskButton = (idx) => (e) => {
    const newTestCase = content.testCase.slice();
    if (newTestCase[idx].task === 'click') newTestCase[idx].task = 'match';
    else if (newTestCase[idx].task === 'match') newTestCase[idx].task = 'skip';
    else if (newTestCase[idx].task === 'skip') newTestCase[idx].task = 'capture';
    else if (newTestCase[idx].task === 'capture') newTestCase[idx].task = 'match';
    setContent({ ...content, testCase: newTestCase });
  };

  const handleInputTestCase = (idx) => (e) => {
    const newTestCase = content.testCase.slice();
    newTestCase[idx].target = e.target.value;
    setContent({ ...content, testCase: newTestCase });
  };
  console.log(content);

  const handleInputCapture = (idx, group) => {
    let newTestCase = content.testCase.slice();
    newTestCase[idx].groups = group;
    if (JSON.stringify(newTestCase[idx].groups) !== JSON.stringify(group)) setContent({ ...content, testCase: newTestCase });
  };

  const handleIsCorrectRegTotal = (e) => {
    const result = e.indexOf(false) === -1;
    if (result !== isCorrectRegTotal) setIsCorrectRegTotal(result);
  };

  const handleFocusTestCase = (key) => (e) => {
    key === 'testCase' ? setFocusTestCase(true) : setFocusTestCase(false);
  };

  const handleTestCaseQuantity = (key, idx) => (e) => {
    let newTestCase = content.testCase.slice();
    if (key === 'add' && newTestCase.length < 5) {
      newTestCase.push(makeTestCase());
    } else if (key === 'delete' && !!idx && newTestCase.length > 1) {
      const front = newTestCase.slice().splice(0, idx);
      const back = newTestCase.slice().splice(idx + 1);
      newTestCase = [...front, ...back];
    }
    console.log(newTestCase);
    setContent({ ...content, testCase: newTestCase });
  };

  // ! ---------------------------- 서버 전송 ----------------------------------
  const handleSubmitQuiz = () => {
    const result = {
      title: content.title === '',
      testCase: content.testCase === '',
      answer: content.answer === '',
      explanation: content.explanation === '',
    };
    setIsEmpty({ ...result });
    console.log(isCorrectRegTotal);

    if (Object.values(result).indexOf(true) !== -1) alert('모든 칸을 채워주세요!');
    else if (!isCorrectRegTotal) alert('정규표현식을 확인해주세요!');
    else submitQuiz(data, content);
  };

  // ! ---------------------------- 수정일 경우 데이터 삽입 ----------------------------------

  useEffect(() => {
    if (!!data) {
      setContent({ ...content, title: data.title, testCase: data.testCase, answer: data.answer, explanation: data.explanation });
    }
  }, []);

  return (
    <>
      <div>
        <div>
          <BackButton />
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <Input isEmpty={isEmpty.title} type="text" value={content.title} placeholder="제목을 입력하세요" maxLength="20" onChange={handleInputValue('title')} />
          </div>
          <div onClick={handleFocusTestCase('testCase')}>
            <h2>Test Case</h2>
            {focusTestCase ? ( //
              <InputTestCase //
                testCases={content.testCase}
                handleInputTestCase={handleInputTestCase}
                handleTaskButton={handleTaskButton}
                handleTestCaseQuantity={handleTestCaseQuantity}
              />
            ) : (
              <ShowTestCase //
                testCases={content.testCase}
                inputRegex={content.answer}
                handleIsCorrectRegTotal={handleIsCorrectRegTotal}
                handleInputCapture={handleInputCapture}
                handleTestCaseQuantity={handleTestCaseQuantity}
              />
            )}
          </div>
          <button type="button" onClick={handleTestCaseQuantity('add')}>
            ➕
          </button>
          <div onClick={handleFocusTestCase('answer')}>
            <h2>정답 / 해설</h2>
            <div>
              <Input isEmpty={isEmpty.answer} type="text" value={content.answer} placeholder="정답을 쓰세요" size="50" maxLength="100" onChange={handleInputValue('answer')} />
            </div>
            <div>
              <Textarea isEmpty={isEmpty.explanation} type="text" value={content.explanation} placeholder="해설을 쓰세요" maxLength="400" onChange={handleInputValue('explanation')} />
            </div>
          </div>
          <div>
            <button type="submit" onClick={() => handleSubmitQuiz()}>
              {!!data ? '수정 완료' : '퀴즈 업로드'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default InputQuiz;
