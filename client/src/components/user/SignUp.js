import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestSignUp } from '../../lib/requestUserInfo';
import { isValidSignUp, isValidEmail, isValidNickname, isValidPassword, isValidPasswordConfirm } from '../../lib/validationFunction';
import { Container, Header, InputBox, Input, NewButton, Bottom, Span } from './SignUp.styled';
import dotenv from 'dotenv';
dotenv.config();

export const SignUp = () => {
  const dispatch = useDispatch();

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
    if (serverResult === true) return dispatch(setModal('emailCert'));
  };

  return (
    <>
      <Container>
        <Header>
          <span>회원가입</span>
        </Header>
        <InputBox>
          <Input type="text" placeholder="이메일" onChange={handleInputValue('email')} onKeyUp={handleKeyUp}></Input>
          <span>&nbsp;&nbsp;{errorMessage.email}</span>
        </InputBox>
        <InputBox>
          <Input type="text" placeholder="닉네임" onChange={handleInputValue('nickname')} onKeyUp={handleKeyUp}></Input>
          <span>&nbsp;&nbsp;{errorMessage.nickname}</span>
        </InputBox>
        <InputBox>
          <Input type="password" placeholder="비밀번호" onChange={handleInputValue('password')} onKeyUp={handleKeyUp}></Input>
          <span>&nbsp;&nbsp;{errorMessage.password}</span>
        </InputBox>
        <InputBox>
          <Input type="password" placeholder="비밀번호 재입력" onChange={handleInputValue('confirm')} onKeyUp={handleKeyUp}></Input>
          <span>&nbsp;&nbsp;{errorMessage.confirm}</span>
        </InputBox>

        <NewButton onClick={handleSubmit}>가입</NewButton>
        <Bottom>
          <span>이미 계정이 있으신가요?</span>
          <Span btn onClick={() => dispatch(setModal('signIn'))}>
            로그인 하기
          </Span>
        </Bottom>
      </Container>
    </>
  );
};

export default SignUp;
