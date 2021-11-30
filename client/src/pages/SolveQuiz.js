import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getQuiz } from '../modules/quiz';
import QuizForm from '../components/QuizForm';
import { ImArrowLeft2 } from 'react-icons/im';

function SolveQuiz() {
  const { id } = useParams('id');
  const { data } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuiz(id));
  }, [id, dispatch]);

  const dummyData = {
    id: 1,
    title: '제목1',
    nickname: '김코딩',
    testCase:
      'I don’t want a lot for Christmas There’s just one thing I need I don’t care about the presents Underneath the Christmas tree I just want you for my own More than you could ever know Make my wish come true... shleecloud@gmail.com All I want for Christmas Is you... I don’t want a lot for Christmas There is just one thing I need And I don’t care about presents Underneath the Christmas tree I don’t need to hang my stocking There upon the fireplace Santa Claus won’t make me happy With a toy on Christmas day I just want you for my own More than you could ever know Make my wish come true All I want for Christmas is you...',
    testCaseTarget: 'shleecloud@gmail.com',
    answer: '/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i',
    isMade: true,
  };

  return (
    <>
      <div>
        <div>
          <ImArrowLeft2 size="50" />
        </div>
        <div>
          <div>
            <div>제목: {dummyData.title}</div>
            <div>닉네임: {dummyData.nickname}</div>
            {dummyData.isMade ? (
              <div>
                <span>수정</span>
                <span>삭제</span>
              </div>
            ) : (
              ''
            )}
          </div>
          <div>
            <QuizForm testCase={dummyData.testCase} testCaseTarget={dummyData.testCaseTarget} answer={dummyData.answer} page={'solve'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SolveQuiz;
