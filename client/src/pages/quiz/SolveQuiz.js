import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getQuiz } from '../../modules/quiz/getquiz';
import { deleteQuiz } from '../../lib/requestQuiz';
import QuizForm from '../../components/QuizForm';
import BackButton from '../../components/BackButton';
import { Container, P } from './SolveQuiz.styled';

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
      <Container>
        <div className="content">
          <BackButton id="0" />
          <P size={2.6} family="Bold" margin={0.6}>
            {data.title}
          </P>
          <P size={2} family="Medium" margin={2.5}>
            {data.nickname}
          </P>
          {data.isMade ? (
            <div className="modify">
              <span>
                <Link to={`/editquiz/${data.id}`}>수정</Link>
              </span>

              <span onClick={handleDelete}>삭제</span>
            </div>
          ) : (
            <></>
          )}
          <QuizForm data={data} orderPage={'quizList'} />
        </div>
      </Container>
    </>
  );
}

export default SolveQuiz;
