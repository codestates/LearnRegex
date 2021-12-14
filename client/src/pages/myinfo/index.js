import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestGetMyInfo } from '../../lib/requestUserInfo';
import { checkUserIsLogin } from '../../lib/checkIsLogin';
import { Container, Span } from './index.styled';
import dotenv from 'dotenv';
dotenv.config();

const MyInfo = () => {
  if (!checkUserIsLogin()) window.location.replace('/');
  const [myInfo, setMyInfo] = useState({
    email: '',
    nickname: '',
    makeQuiz: 0,
    clearQuiz: 0,
    socialType: '',
  });
  useEffect(() => {
    const getMyInfo = async () => {
      const resultMyInfo = await requestGetMyInfo();
      if (resultMyInfo !== false) setMyInfo(resultMyInfo.data.data);
    };
    getMyInfo();
  }, []);

  return (
    <>
      <Container>
        <div className="tmp">
          <p>회원 정보 조회</p>
          <div className="content">
            <img src="/assets/emailIcon.png" alt="emailIcon" />
            <Span category>
              <span title>이메일</span>
            </Span>
            <Span>
              <span>{myInfo.socialType === 'local' ? myInfo.email : myInfo.socialType + ' 로그인'}</span>
            </Span>
          </div>
          <div className="content">
            <img src="/assets/nicknameIcon.png" alt="nicknameIcon" />
            <Span category>
              <span title>닉네임</span>
            </Span>
            <Span>
              <span>{myInfo.nickname}</span>
            </Span>
          </div>
          <div className="content">
            <img src="/assets/registerQuizIcon.png" alt="registerQuizIcon" />
            <Span category>
              <span title>등록한 퀴즈</span>
            </Span>
            <Span>
              <span>{myInfo.makeQuiz}</span>
            </Span>
          </div>
          <div className="content">
            <img src="/assets/clearQuizIcon.png" alt="clearQuizIcon" />
            <Span category>
              <span title>해결한 퀴즈</span>
            </Span>
            <Span>
              <span>{myInfo.clearQuiz}</span>
            </Span>
          </div>
          <Link to="/modify">
            <button>프로필 수정</button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default MyInfo;
