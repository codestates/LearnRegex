import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import { submitQuiz } from '../lib/submitQuiz';

function InputQuiz({ data }) {
  const [content, setContent] = useState({ title: '', testCase: '', testCaseTarget: '', answer: '', explanation: '' });

  const handleInputValue = (key) => (e) => {
    setContent({ ...content, [key]: e.target.value });
  };

  const dummyData = {
    id: 1,
    title: '제목1',
    nickname: '김코딩',
    testCase:
      'I don’t want a lot for Christmas There’s just one thing I need I don’t care about the presents Underneath the Christmas tree I just want you for my own More than you could ever know Make my wish come true... shleecloud@gmail.com All I want for Christmas Is you... I don’t want a lot for Christmas There is just one thing I need And I don’t care about presents Underneath the Christmas tree I don’t need to hang my stocking There upon the fireplace Santa Claus won’t make me happy With a toy on Christmas day I just want you for my own More than you could ever know Make my wish come true All I want for Christmas is you...',
    testCaseTarget: 'shleecloud@gmail.com',
    answer: '/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i',
    explanation:
      'Santa tell me if youre really there Don`t make me fall in love again If he won`t be here next year Santa tell me if he really cares Cause I can`t give it all away If he won`t be here next year Feeling Christmas all around And I`m trying to play it cool But it`s hard to focus When I see him walking cross the room Let it snow, is blasting now But I won`t get it in the mood I`m avoiding every mistletoe Until I know its true love That he thinks of So next Christmas I`m not all alone boy',
    isMade: false,
  };

  // TODO: 상속 받은 data가 null이 아니라면 content 상태가 변화되어야 함
  if (data) {
    console.log('나오니?');
    // for (let key in dummyData) {
    //   console.log(dummyData[key]);
    //   setContent({ ...content, [key]: dummyData[key] }); // 상태가 바뀌기 때문에 무한랜더링에 빠짐..
    //   console.log(content);
    // }
  }

  return (
    <>
      <div>
        <div>
          <BackButton />
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
            <button type="submit" onClick={submitQuiz(data, content)}>
              {!!data ? '수정 완료' : '퀴즈 업로드'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default InputQuiz;
