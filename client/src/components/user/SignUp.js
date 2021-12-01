import React, { useState, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { requestSignUp } from '../../lib/requestUserInfo';
import { isValidSignUp, isValidEmail, isValidNickname, isValidPassword, isValidPasswordConfirm } from '../../lib/validationFunction';
import dotenv from 'dotenv';
dotenv.config();

export const SignUp = () => {
  const [inputUserInfo, setSignUpInfo] = useState({
    email: '',
    nickname: '',
    password: '',
    confirm: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    nickname: '',
    password: '',
    confirm: '',
  });

  // * 키 입력 0.5초 기다리고 유효성 검사
  const timeWait = useRef();
  const handleInputValue = (key) => (e) => {
    const inputKey = e.target.value;
    setSignUpInfo({ ...inputUserInfo, [key]: inputKey });
    clearTimeout(timeWait.current);
    timeWait.current = setTimeout(async () => {
      if (key === 'email') setErrorMessage({ ...errorMessage, email: await isValidEmail(inputKey) });
      else if (key === 'nickname') setErrorMessage({ ...errorMessage, nickname: await isValidNickname(inputKey) });
      else if (key === 'password') setErrorMessage({ ...errorMessage, password: isValidPassword(inputKey) });
      else if (key === 'confirm') setErrorMessage({ ...errorMessage, confirm: isValidPasswordConfirm(inputUserInfo.password, inputKey) });
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
    const errorResult = await isValidSignUp(inputUserInfo);
    setErrorMessage(errorResult);
    if (Object.values(errorResult).find((el) => el !== '')) return;

    // * 서버 통신
    const serverResult = await requestSignUp(inputUserInfo);
    if (serverResult) console.log('hi!');
    else console.log('error!');
  };

  return (
    <>
      <div>
        <h1>SignUp</h1>
        <h2>Email</h2>
        <input type="text" onChange={handleInputValue('email')} onKeyUp={handleKeyUp}></input>
        <p>{errorMessage.email}&nbsp;</p>

        <h2>Nickname</h2>
        <input type="text" onChange={handleInputValue('nickname')} onKeyUp={handleKeyUp}></input>
        <p>{errorMessage.nickname}&nbsp;</p>

        <h2>Password</h2>
        <input type="text" onChange={handleInputValue('password')} onKeyUp={handleKeyUp}></input>
        <p>{errorMessage.password}&nbsp;</p>

        <h2>Password Confirm</h2>
        <input type="text" onChange={handleInputValue('confirm')} onKeyUp={handleKeyUp}></input>
        <p>{errorMessage.confirm}&nbsp;</p>

        <input type="button" onClick={handleSubmit} value="Submit" />
      </div>
    </>
  );
};

export default SignUp;