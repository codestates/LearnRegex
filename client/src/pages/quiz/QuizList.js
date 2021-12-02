import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizzes } from '../../modules/quizzes';
import QuizListElement from '../../components/QuizListElement';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';

function QuizList() {
  const { data } = useSelector((state) => state.quizzes.list);
  // console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizzes());
  }, [dispatch]);

  // DummyData = 받아온 data
  const dummyData = [
    { id: 1, title: '제목1', nickname: '일삼이', count: 1, isClear: true },
    { id: 2, title: '제목2', nickname: '이삼이', count: 2, isClear: false },
    { id: 3, title: '제목3', nickname: '삼삼이', count: 3, isClear: false },
    { id: 4, title: '제목4', nickname: '사삼이', count: 4, isClear: false },
  ];

  return (
    <>
      <Link to="/makequiz">
        <BsPencilSquare size="50" />
      </Link>
      {/* TODO: QuizListElement에게 data의 id, title, nickname, count, isClear 전달하기 
      <QuizListElement id={1} title={'제목이당'} nickname={'김코딩'} count={3} isClear={true} /> */}
      {dummyData.map((el) => (
        <QuizListElement key={el.id} id={el.id} title={el.title} nickname={el.nickname} count={el.count} isClear={el.isClear} />
      ))}
    </>
  );
}

export default QuizList;
