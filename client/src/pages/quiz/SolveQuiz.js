import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getQuiz } from '../../modules/quiz/getquiz';
import { deleteQuiz } from '../../lib/requestQuiz';
import QuizForm from '../../components/QuizForm';
import BackButton from '../../components/BackButton';

function SolveQuiz() {
  const { id } = useParams('id');
  const { data } = useSelector((state) => state.getquiz.quiz);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuiz(id));
  }, [id]);

  if (!data) return <div>loading....</div>;

  const handleDelete = () => {
    deleteQuiz(id);
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
                  <button>수정</button>
                </Link>
                <button onClick={handleDelete}>삭제</button>
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
