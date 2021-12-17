import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import QuizListElement from '../../components/QuizListElement';
import Paginate from '../../components/Paginate';
import { Container, P } from './QuizList.styled';

function QuizList() {
  const { isLogin } = useSelector((state) => state.isLogin);
  const { list } = useSelector((state) => state.getquizzes.list);
  const navigate = useNavigate();
  const [text, setText] = useState({ state: 'notice', text: '퀴즈 만들기!' });

  const handleAlert = () => {
    if (!!isLogin) {
      navigate('/makequiz');
    } else {
      setText({ ...text, state: 'alert', text: '로그인하고 이용하세요 :)' });
      setTimeout(() => {
        setText({ ...text, state: 'notice', text: '퀴즈 만들기!' });
      }, 2000);
    }
  };

  return (
    <>
      <Container>
        <div className="cardContainer">
          <img src="/assets/makeQuizIcon.png" alt="makeQuizIcon.png" onClick={handleAlert} />
          <P state={text.state}>{text.text}</P>
          {!list ? 'loading' : list.map((el) => <QuizListElement key={el.id} data={el} />)}
        </div>
        <Paginate />
      </Container>
    </>
  );
}

export default QuizList;
