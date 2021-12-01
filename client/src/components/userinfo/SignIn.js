import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

import { requestSignIn } from '../../lib/requestUserInfo';

export const SignIn = () => {
  const [signInInfo, setSignInInfo] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
  });

  const handleInputValue = (key) => (e) => {
    setSignInInfo({ ...signInInfo, [key]: e.target.value });
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSignIn();
    }
  };

  const handleSignIn = async () => {
    const { email, password } = signInInfo;

    // 빈칸 예외 처리
    const errorResult = { email: '', password: '' };
    if (email === '') errorResult.email = '이메일을 입력하세요.';
    if (password === '') errorResult.password = '비밀번호를 입력하세요.';
    setErrorMessage(errorResult);
    if (Object.values(errorResult).find((el) => el !== '')) return;

    // 서버 통신
    const serverResult = requestSignIn();
    if (serverResult) console.log('hi!');
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
        <input type="button" onClick={handleSignIn} value="SignIn" />
      </div>
    </>
  );
};

export default SignIn;
