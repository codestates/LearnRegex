import React, { useState, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { requestEditUserPassword } from '../../lib/requestUserInfo';
import { isValidEditUserPassword, isValidPassword, isValidPasswordConfirm } from '../../lib/validationFunction';
import dotenv from 'dotenv';
dotenv.config();

export const EditUserPassword = () => {
  const [inputUserInfo, setInputUserInfo] = useState({
    oldPassword: '',
    newPassword: '',
    confirm: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    oldPassword: '',
    newPassword: '',
    confirm: '',
  });

  // * 키 입력 0.5초 기다리고 유효성 검사
  const timeWait = useRef();
  const handleInputValue = (key) => (e) => {
    const inputKey = e.target.value;
    setInputUserInfo({ ...inputUserInfo, [key]: inputKey });
    clearTimeout(timeWait.current);
    timeWait.current = setTimeout(async () => {
      if (key === 'oldPassword') setErrorMessage({ ...errorMessage, oldPassword: isValidPassword(inputKey) });
      else if (key === 'newPassword') setErrorMessage({ ...errorMessage, newPassword: isValidPassword(inputKey) });
      else if (key === 'confirm') setErrorMessage({ ...errorMessage, confirm: isValidPasswordConfirm(inputUserInfo.newPassword, inputKey) });
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
    const errorResult = await isValidEditUserPassword(inputUserInfo);
    setErrorMessage(errorResult);
    console.log(errorResult);
    if (Object.values(errorResult).find((el) => el !== '')) return;

    // * 서버 통신
    const serverResult = await requestEditUserPassword(inputUserInfo);
    if (serverResult) console.log('hi!');
    else console.log('error!');
  };

  return (
    <>
      <div>
        <h1>EditUserPassword</h1>
        <h2>Password</h2>
        <input type="text" onChange={handleInputValue('oldPassword')} onKeyUp={handleKeyUp}></input>
        <p>{errorMessage.oldPassword}&nbsp;</p>

        <h2>Password</h2>
        <input type="text" onChange={handleInputValue('newPassword')} onKeyUp={handleKeyUp}></input>
        <p>{errorMessage.newPassword}&nbsp;</p>

        <h2>Password Confirm</h2>
        <input type="text" onChange={handleInputValue('confirm')} onKeyUp={handleKeyUp}></input>
        <p>{errorMessage.confirm}&nbsp;</p>

        <input type="button" onClick={handleSubmit} value="Submit" />
      </div>
    </>
  );
};

export default EditUserPassword;