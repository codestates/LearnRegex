import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestSignIn } from '../../lib/requestUserInfo';
import { googleLogin } from '../../lib/oauthGoogle';
import { kakaoLogin } from '../../lib/oauthKakao';
import { githubLogin } from '../../lib/oauthGithub';
import { Container, Header, Img, InputBox, Button, OauthBox, Bottom, Input, Span } from './SignInElements';

export const SignIn = () => {
  const dispatch = useDispatch();

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
    if (serverResult === true) {
      dispatch(setModal('close'));
      window.location.reload();
    } else if (serverResult === 'invalid email') {
      setErrorMessage({ ...errorResult, email: '잘못된 이메일입니다.' });
    } else if (serverResult === 'not verify email') {
      setErrorMessage({ ...errorResult, email: '인증되지 않은 이메일입니다.' });
    } else if (serverResult === 'invalid password') {
      setErrorMessage({ ...errorResult, password: '잘못된 비밀번호입니다.' });
    } else {
      setErrorMessage({ ...errorResult, email: '잠시후에 다시 시도해주세요.' });
    }
  };

  const handleOAuthKakao = () => {
    kakaoLogin();
  };
  const handleOAuthGoogle = () => {
    googleLogin();
  };
  const handleOAuthGithub = () => {
    githubLogin();
  };

  return (
    <>
      <Container>
        <Header>
          <Img logo alt="learnRegex-logo-no-bg" src="https://user-images.githubusercontent.com/87485508/145760234-b6883d97-25df-4199-bb0b-db5fdbd5156b.png" />
        </Header>
        <InputBox>
          <Input type="text" onChange={handleInputValue('email')} onKeyUp={handleKeyUp} placeholder="이메일" />
          <span>&nbsp;&nbsp;{errorMessage.email}</span>
        </InputBox>
        <InputBox>
          <Input type="password" onChange={handleInputValue('password')} onKeyUp={handleKeyUp} placeholder="비밀번호" />
          <span>&nbsp;&nbsp;{errorMessage.password}</span>
        </InputBox>
        <Button onClick={handleSubmit}>로그인</Button>
        <Span btn onClick={() => dispatch(setModal('findPassword'))}>
          비밀번호를 잊으셨나요 ?
        </Span>
        <OauthBox>
          <div className="icon">
            <Img btn icon src="/assets/googleIcon.png" onClick={handleOAuthGoogle} value="OAuth Google" alt="googleIcon" />
          </div>
          <div className="icon">
            <Img btn icon src="/assets/kakaoIcon.png" onClick={handleOAuthKakao} value="OAuth Kakao" alt="kakaoIcon" />
          </div>
          <div className="icon">
            <Img btn icon src="/assets/githubIcon.png" onClick={handleOAuthGithub} value="OAuth Github" alt="githubIcon" />
          </div>
        </OauthBox>
        <Bottom>
          <span>아직 계정이 없으신가요?</span>
          <Span btn type="button" onClick={() => dispatch(setModal('signUp'))}>
            가입하기
          </Span>
        </Bottom>
      </Container>
    </>
  );
};

export default SignIn;
