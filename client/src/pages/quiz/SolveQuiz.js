import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getQuiz } from '../../modules/quiz/getquiz';
import QuizForm from '../../components/QuizForm';
import BackButton from '../../components/BackButton';

function SolveQuiz() {
  const { id } = useParams('id');
  const { data } = useSelector((state) => state.quiz.quiz);
  // console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuiz(id));
  }, [id]);

  if (!data) return <div>loading....</div>;

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
            <div>제목: {data.title}</div>
            <div>닉네임: {data.nickname}</div>
            {data.isMade ? (
              <div>
                <Link to={`/editquiz/${data.id}`}>
                  <span>수정</span>
                </Link>
                <span onClick={deleteQuiz}>삭제</span>
              </div>
            ) : (
              ''
            )}
          </div>
          <div>
            <QuizForm data={data} page={'solve'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SolveQuiz;
