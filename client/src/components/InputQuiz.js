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
  const [content, setContent] = useState({ title: '', testCase: '', testCaseTarget: '', answer: '', explanation: '' });
  const [isEmpty, setIsEmpty] = useState({ title: false, testCase: false, testCaseTarget: false, answer: false, explanation: false });
  const [focusTestCase, setFocusTestCase] = useState(true);
  const [testCases, setTestCases] = useState(
    Array(5)
      .fill()
      .map(() => makeTestCase())
  );

  // * --------- 텍스트창 입력 ---------
  const handleInputValue = (key) => (e) => {
    if (isEmpty[key] === true) setIsEmpty({ ...isEmpty, [key]: false }); // 빈 칸이었다가 무언가 입력 시  빨간 테두리 사라짐
    let result = limitChar(e.target.value.length, e.target.maxLength);

    // * 정규표현식 관련 변수 초기화
    let testCase = content.testCase;
    let answer = content.answer;
    if (key === 'testCase') testCase = e.target.value;
    else if (key === 'answer') answer = e.target.value;

    // * 정규표현식 만들기
    let myRegex = '';
    try {
      const flags = 'g';
      const pattern = answer || '^$';
      myRegex = new RegExp(pattern, flags);
    } catch (e) {
      myRegex = new RegExp('^$', 'g');
    }
    let matchArray = myRegex.exec(testCase);
    let testCaseTarget = Array.isArray(matchArray) ? matchArray[0] : '';
    if (!!result) setContent({ ...content, testCaseTarget: testCaseTarget, [key]: e.target.value });
  };

  // ! ---------------------------- 테스트케이스 입력 -------------------------
  const handleInputTestCase = (key) => (e) => {
    const newTestCase = testCases.slice();
    newTestCase[key].target[0] = e.target.value;
    setTestCases(newTestCase);
    console.log(newTestCase);
  };

  const handleTaskButton = (key) => (e) => {
    const newTestCase = testCases.slice();
    if (newTestCase[key].task === 'click') newTestCase[key].task = 'match';
    else if (newTestCase[key].task === 'match') newTestCase[key].task = 'skip';
    else if (newTestCase[key].task === 'skip') newTestCase[key].task = 'capture';
    else if (newTestCase[key].task === 'capture') newTestCase[key].task = 'match';
    setTestCases(newTestCase);
  };

  const handleFocusTestCase = (key) => (e) => {
    key === 'testCase' ? setFocusTestCase(true) : setFocusTestCase(false);
    console.log(focusTestCase);
  };

  // ! ---------------------------- 서버 전송 ----------------------------------
  const handleSubmitQuiz = () => {
    const result = {
      title: content.title === '',
      testCase: content.testCase === '',
      testCaseTarget: content.testCaseTarget === '',
      answer: content.answer === '',
      explanation: content.explanation === '',
    };
    setIsEmpty({ ...result });

    if (Object.values(result).indexOf(true) === -1) submitQuiz(data, content);
    else alert('모든 칸을 채워주세요!');
  };

  // ! ---------------------------- 수정일 경우 데이터 삽입 ----------------------------------

  useEffect(() => {
    if (!!data) {
      setContent({ ...content, title: data.title, testCase: data.testCase, testCaseTarget: data.testCaseTarget, answer: data.answer, explanation: data.explanation });
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
            <Input isEmpty={isEmpty.title} type="text" value={testCases.title} placeholder="제목을 입력하세요" maxLength="20" onChange={handleInputValue('title')} />
          </div>
          <div onClick={handleFocusTestCase('testCase')}>
            <h2>Test Case</h2>
            {focusTestCase ? ( //
              <InputTestCase testCases={testCases} handleInputTestCase={handleInputTestCase} handleTaskButton={handleTaskButton} />
            ) : (
              <ShowTestCase testCases={testCases} inputRegex={content.answer} />
            )}

            <div>
              {/* //? 수정할 수 없는 Textarea. 디자인 처리할 때 다른 태그로 바꿔야될 것 같음 */}
              <p>곧 사라질 입력창입니다.</p>
              <Textarea isEmpty={isEmpty.testCaseTarget} value={content.testCaseTarget} placeholder="testCaseTarget을 입력하세요" readonly maxLength="400" />
            </div>
          </div>
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
