import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestGetMyInfo } from '../../lib/requestUserInfo';
import dotenv from 'dotenv';
dotenv.config();

const MyInfo = () => {
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
      if (resultMyInfo) setMyInfo(resultMyInfo.data.data);
    };
    getMyInfo();
  }, []);

  return (
    <>
      <h3>MyInfo</h3>
      <p>Email: {myInfo.socialType === 'local' ? myInfo.email : 'Login as ' + myInfo.socialType}</p>
      <p>Nickname: {myInfo.nickname}</p>
      <p>MakeQuiz: {myInfo.makeQuiz}</p>
      <p>ClearQuiz: {myInfo.clearQuiz}</p>
      <Link to="/modify">회원 정보 수정</Link>
    </>
  );
};

export default MyInfo;
