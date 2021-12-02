import React, { useState, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { requestEditUserInfo } from '../../lib/requestUserInfo';
import { isValidEditUserInfo, isValidEmail, isValidNickname } from '../../lib/validationFunction';
import dotenv from 'dotenv';
dotenv.config();

export const EditUserInfo = () => {
  const [inputUserInfo, setInputUserInfo] = useState({
    email: '',
    nickname: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    nickname: '',
  });

  // * 키 입력 0.5초 기다리고 유효성 검사
  const timeWait = useRef();
  const handleInputValue = (key) => (e) => {
    const inputKey = e.target.value;
    setInputUserInfo({ ...inputUserInfo, [key]: inputKey });
    clearTimeout(timeWait.current);
    timeWait.current = setTimeout(async () => {
      if (key === 'email') setErrorMessage({ ...errorMessage, email: await isValidEmail(inputKey) });
      else if (key === 'nickname') setErrorMessage({ ...errorMessage, nickname: await isValidNickname(inputKey) });
    }, 500);
  };

  // * 엔터키 동작
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // * Submit 버튼 클릭
  const handleSubmit = async () => {
    // * 유효성 처리
    // const errorResult = await isValidEditUserInfo(inputUserInfo);
    // setErrorMessage(errorResult);
    // console.log(errorResult);
    // if (Object.values(errorResult).find((el) => el !== '')) return;

    // * 서버 통신
    const serverResult = await requestEditUserInfo(inputUserInfo);
    if (serverResult) console.log('hi!');
    else console.log('error!');
  };

  return (
    <>
      <div>
        <h1>EditUserInfo</h1>
        <h2>Email</h2>
        <input type="text" onChange={handleInputValue('email')} onKeyUp={handleKeyUp}></input>
        <p>{errorMessage.email}&nbsp;</p>

        <h2>Nickname</h2>
        <input type="text" onChange={handleInputValue('nickname')} onKeyUp={handleKeyUp}></input>
        <p>{errorMessage.nickname}&nbsp;</p>

        <input type="button" onClick={handleSubmit} value="Submit" />
      </div>
    </>
  );
};

export default EditUserInfo;
