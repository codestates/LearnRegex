import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestSignIn, requestSignOut } from '../../lib/requestUserInfo';
import { googleLogin } from '../../lib/oauthGoogle';
import { kakaoLogin } from '../../lib/oauthKakao';
import { githubLogin } from '../../lib/oauthGithub';

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    //TODO: 모달 닫히게 하기
    if (serverResult) {
      console.log('hi');
      dispatch(setModal('close'));
      window.location.reload();
    } else console.log('error!');
  };

  const handleSignOut = async () => {
    const serverResult = await requestSignOut(inputUserInfo);
    if (serverResult) {
      navigate('/');
      dispatch(setModal('close'));
    } else console.log('error!');
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
      <div>
        <h1>SignIn</h1>
        <h2>email</h2>
        <input type="text" onChange={handleInputValue('email')} onKeyUp={handleKeyUp}></input>
        <p>{errorMessage.email}&nbsp;</p>
        <h2>password</h2>
        <input type="text" onChange={handleInputValue('password')} onKeyUp={handleKeyUp}></input>
        <p>{errorMessage.password}&nbsp;</p>

        <div>
          <button onClick={() => dispatch(setModal('findPassword'))}>비밀번호를 잊으셨나요 ?</button>
        </div>

        <div>
          <input type="button" onClick={handleSubmit} value="SignIn" />
          <input type="button" onClick={handleSignOut} value="SignOut" />
        </div>
        <div>
          <input type="button" onClick={handleOAuthKakao} value="OAuth Kakao" />
          <input type="button" onClick={handleOAuthGoogle} value="OAuth Google" />
          <input type="button" onClick={handleOAuthGithub} value="OAuth Github" />
        </div>
        <div>아직 계정이 없으신가요?</div>
        <div>
          <button type="button" onClick={() => dispatch(setModal('signUp'))}>
            가입하기
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
