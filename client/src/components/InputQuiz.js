import React, { useState } from 'react';
import { ImArrowLeft2 } from 'react-icons/im';

function InputQuiz({ page = 'make' }) {
  const [content, setContent] = useState({ title: '', testCase: '', testCaseTarget: '', answer: '', explanation: '' });

  const handleInputValue = (key) => (e) => {
    setContent({ ...content, [key]: e.target.value });
  };

  return (
    <>
      <div>
        <div>
          <ImArrowLeft2 size="50" />
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input type="text" value={content.title} placeholder="제목을 입력하세요" onChange={handleInputValue('title')} />
          </div>
          <div>
            <h2>Test Case</h2>
            <div>
              <textarea value={content.testCase} placeholder="testCase를 입력하세요" onChange={handleInputValue('testCase')} />
            </div>
            <div>
              <textarea value={content.testCaseTarget} placeholder="testCaseTarget을 입력하세요" onChange={handleInputValue('testCaseTarget')} />
            </div>
          </div>
          <div>
            <h2>정답 / 해설</h2>
            <div>
              <input type="text" value={content.answer} placeholder="정답을 쓰세요" onChange={handleInputValue('answer')} />
            </div>
            <div>
              <textarea type="text" value={content.explanation} placeholder="해설을 쓰세요" onChange={handleInputValue('explanation')} />
            </div>
          </div>
          <div>
            <button type="submit">{page === 'make' ? '퀴즈 업로드' : '수정 완료'}</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default InputQuiz;
