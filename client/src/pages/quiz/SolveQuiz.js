import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getQuiz } from '../../modules/quiz';
import QuizForm from '../../components/QuizForm';
import BackButton from '../../components/BackButton';

function SolveQuiz() {
  const { id } = useParams('id');
  const { data } = useSelector((state) => state.quiz.quiz);
  // console.log('SolveQuiz');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuiz(id));
  }, [id, dispatch]);

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

  const deleteQuiz = () => {
    // TODO: 삭제 text 클릭시 퀴즈 삭제 요청
  };

  return (
    <>
      <div>
        <div>
          <BackButton />
        </div>
        <div>
          <div>
            <div>제목: {dummyData.title}</div>
            <div>닉네임: {dummyData.nickname}</div>
            {dummyData.isMade ? (
              <div>
                <Link to="/editquiz">
                  <span>수정</span>
                </Link>
                <span onClick={deleteQuiz}>삭제</span>
              </div>
            ) : (
              ''
            )}
          </div>
          <div>
            <QuizForm data={data} orderPage={'quizList'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SolveQuiz;
