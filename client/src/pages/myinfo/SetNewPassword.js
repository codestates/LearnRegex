import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestSetNewPassword } from '../../lib/requestUserInfo';
import { isValidSetNewPassword, isValidPassword, isValidPasswordConfirm } from '../../lib/validationFunction';
import { Container } from './SetNewPassword.styled';
import dotenv from 'dotenv';
dotenv.config();

export const SetNewPassword = () => {
  const dispatch = useDispatch();
  const [inputUserInfo, setInputUserInfo] = useState({
    newPassword: '',
    confirm: '',
  });
  const [errorMessage, setErrorMessage] = useState({
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
      if (key === 'newPassword') setErrorMessage({ ...errorMessage, newPassword: isValidPassword(inputKey) });
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
    const errorResult = await isValidSetNewPassword(inputUserInfo);
    setErrorMessage(errorResult);
    console.log(errorResult);
    if (Object.values(errorResult).find((el) => el !== '')) return;

    // * 서버 통신
    const serverResult = await requestSetNewPassword(inputUserInfo);
    if (serverResult === true) dispatch(setModal('alert'));
    else console.log('error!');
  };

  return (
    <>
      <Container>
        <p>비밀번호 재설정</p>
        <div className="box">
          <span>새로운 비밀번호</span>
          <div className="input">
            <input type="password" onChange={handleInputValue('newPassword')} onKeyUp={handleKeyUp}></input>
            <span>{errorMessage.newPassword}&nbsp;</span>
          </div>
        </div>
        <div className="box">
          <span>비밀번호 재입력</span>
          <div className="input">
            <input type="password" onChange={handleInputValue('confirm')} onKeyUp={handleKeyUp}></input>
            <span>{errorMessage.confirm}&nbsp;</span>
          </div>
        </div>
        <button onClick={handleSubmit}>수정 완료</button>
      </Container>
    </>
  );
};

export default SetNewPassword;
