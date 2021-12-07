import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import { submitQuiz } from '../lib/requestQuiz';
import { limitChar } from '../lib/limitChar';
import styled from 'styled-components';

export const Div = styled.div`
  border: 1px solid ${({ isEmpty }) => (isEmpty ? 'red' : 'black')};
`;

function InputQuiz({ data }) {
  const [content, setContent] = useState({ title: '', testCase: '', testCaseTarget: '', answer: '', explanation: '' });
  const isEmpty = false;

  const handleInputValue = (key) => (e) => {
    let result = limitChar(e.target.value.length, e.target.maxLength);
    if (!!result) setContent({ ...content, [key]: e.target.value });
  };

  // * 빈 칸인지 확인
  const handleSubmitQuiz = () => {
    const contentKeys = Object.keys(content).slice(); // content의 key들만 담은 배열 = [title, testCase, testCaseTarget, answer, explanation]

    const result = contentKeys.reduce((acc, cur) => {
      // content[key]의 값이 빈 문자열인 것만 담은 배열
      if (content[cur] === '') return acc.concat(cur);
      else return acc;
    }, []);
    console.log(result);
    // submitQuiz(data, content)
  };

  useEffect(() => {
    if (!!data) {
      // console.log('EditQuiz가 존재하면 뜨는 로그');
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
          <Div isEmpty={isEmpty === true}>
            <input type="text" value={content.title} placeholder="제목을 입력하세요" maxLength="20" onChange={handleInputValue('title')} />
          </Div>
          <div>
            <h2>Test Case</h2>
            <Div isEmpty={isEmpty === false}>
              <textarea value={content.testCase} placeholder="testCase를 입력하세요" maxLength="400" onChange={handleInputValue('testCase')} />
            </Div>
            <Div isEmpty={isEmpty}>
              <textarea value={content.testCaseTarget} placeholder="testCaseTarget을 입력하세요" maxLength="400" onChange={handleInputValue('testCaseTarget')} />
            </Div>
          </div>
          <div>
            <h2>정답 / 해설</h2>
            <Div isEmpty={isEmpty}>
              <input type="text" value={content.answer} placeholder="정답을 쓰세요" maxLength="100" onChange={handleInputValue('answer')} />
            </Div>
            <Div isEmpty={isEmpty}>
              <textarea type="text" value={content.explanation} placeholder="해설을 쓰세요" maxLength="400" onChange={handleInputValue('explanation')} />
            </Div>
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
