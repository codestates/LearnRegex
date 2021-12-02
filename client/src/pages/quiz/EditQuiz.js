import React from 'react';
import { useSelector } from 'react-redux';
import InputQuiz from '../../components/InputQuiz';

function EditQuiz() {
  const { data } = useSelector((state) => state.quiz.quiz);

  const dummyData = {
    id: 1,
    title: '제목1',
    nickname: '김코딩',
    testCase:
      'I don’t want a lot for Christmas There’s just one thing I need I don’t care about the presents Underneath the Christmas tree I just want you for my own More than you could ever know Make my wish come true... shleecloud@gmail.com All I want for Christmas Is you... I don’t want a lot for Christmas There is just one thing I need And I don’t care about presents Underneath the Christmas tree',
    testCaseTarget: 'shleecloud@gmail.com',
    answer: '/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i',
    explanation:
      'Santa tell me if youre really there Don`t make me fall in love again If he won`t be here next year Santa tell me if he really cares Cause I can`t give it all away If he won`t be here next year Feeling Christmas all around And I`m trying to play it cool But it`s hard to focus When I see him walking cross the room Let it snow, is blasting now But I won`t get it in the mood',
    isMade: true,
  };

  return (
    <>
      <InputQuiz data={dummyData} />
    </>
  );
}

export default EditQuiz;
