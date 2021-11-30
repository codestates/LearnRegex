import React from 'react';
import { ImArrowLeft2 } from 'react-icons/im';

function InputQuiz({ page = 'make' }) {
  return (
    <>
      <div>
        <div>
          <ImArrowLeft2 size="50" />
        </div>
        <div>
          <div>
            <input type="text" placeholder="제목을 입력하세요" />
          </div>
          <div>
            <h2>Test Case</h2>
            <div>
              <textarea placeholder="testCase를 입력하세요" />
            </div>
            <div>
              <textarea placeholder="testCaseTarget을 입력하세요" />
            </div>
          </div>
          <div>
            <h2>정답 / 해설</h2>
            <div>
              <input type="text" placeholder="정답을 쓰세요" />
            </div>
            <div>
              <textarea type="text" placeholder="해설을 쓰세요" />
            </div>
          </div>
          <div>
            <button>{page === 'make' ? '퀴즈 업로드' : '수정 완료'}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputQuiz;
