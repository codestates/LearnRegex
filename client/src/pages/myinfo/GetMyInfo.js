import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { requestGetMyInfo } from '../../lib/requestUserInfo';
import dotenv from 'dotenv';
dotenv.config();

export const GetMyInfo = () => {
  const navigate = useNavigate();
  const [myInfo, setMyInfo] = useState({
    email: '기본메일',
    nickname: '기본닉네임',
    makeQuiz: 0,
    clearQuiz: 0,
  });
  useEffect(() => {
    // setMyInfo(resultMyInfo);
  }, []);

  const handleSubmit = () => {
    const resultMyInfo = requestGetMyInfo();
    console.log('resultMyInfo');
  };
  return (
    <>
      <h1>GetMyInfo</h1>
      <p>Email: {myInfo.email}</p>
      <p>Nickname: {myInfo.nickname}</p>
      <p>MakeQuiz: {myInfo.makeQuiz}</p>
      <p>ClearQuiz: {myInfo.clearQuiz}</p>
      <input type="button" onClick={handleSubmit} value="patch" />
    </>
  );
};

export default GetMyInfo;
