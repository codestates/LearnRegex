import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

import { requestSignIn, requestSignOut } from '../../lib/requestUserInfo';

export const SignIn = () => {
  const [inputUserInfo, setInputUserInfo] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
  });

  const handleInputValue = (key) => (e) => {
    setInputUserInfo({ ...inputUserInfo, [key]: e.target.value });
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const { email, password } = inputUserInfo;

    // 빈칸 예외 처리
    const errorResult = { email: '', password: '' };
    if (email === '') errorResult.email = '이메일을 입력하세요.';
    if (password === '') errorResult.password = '비밀번호를 입력하세요.';
    setErrorMessage(errorResult);
    if (Object.values(errorResult).find((el) => el !== '')) return;

    // 서버 통신
    const serverResult = await requestSignIn(inputUserInfo);
    if (serverResult) console.log('SignIn');
    else console.log('error!');
  };

  const handleSignOut = async () => {
    const serverResult = await requestSignOut(inputUserInfo);
    if (serverResult) console.log('SignOut');
    else console.log('error!');
  };

  return (
    <>
      <div>
        <h1>SignIn</h1>
        <h2>email</h2>
        <input type="text" onChange={handleInputValue('email')} onKeyUp={handleKeyUp}></input>
        <p>{errorMessage.email}&nbsp;</p>
        <h2>password</h2>
        <input type="text" onChange={handleInputValue('password')} onKeyUp={handleKeyUp}></input>
        <p>{errorMessage.password}&nbsp;</p>
        <input type="button" onClick={handleSubmit} value="SignIn" />
        <input type="button" onClick={handleSignOut} value="SignOut" />
      </div>
    </>
  );
};

export default SignIn;
