import React, { useState } from 'react';
import { requestFindPassword } from '../../lib/requestUserInfo';
import { isValidOnlyEmail } from '../../lib/validationFunction';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 1rem 2rem;

  h1 {
    font-family: IBMPlexSansKR-Bold;
    color: var(--color-dark-blue);
    margin: 0.7em 0 1.3rem 0;
  }

  button {
    width: 50%;
    height: 40px;
    font-size: 1.1rem;
    border-radius: 1rem;
    background-color: var(--color-blue);
    color: white;

    transition: all 0.3s ease 0s;
    letter-spacing: 2.5px;
    :hover {
      box-shadow: 0px 5px 8px rgba(171, 180, 221, 0.4);
      transform: translateY(-2px);
    }
  }
`;

export const InputBox = styled.div`
  width: 100%;
  text-align: left;
  padding: 0.7rem 0;

  input {
    width: 100%;
    height: 2.5rem;
    background-color: var(--color-gray);
    border-radius: 7px;
    opacity: 0.7;
    padding: 0 0.6rem 0 0.6rem;
  }

  span {
    color: var(--color-red);
    opacity: 0.8;
    font-size: 0.9rem;
  }
`;

const FindPassword = () => {
  const dispatch = useDispatch();

  const [inputUserInfo, setInputUserInfo] = useState({
    email: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    email: '',
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
    const { email } = inputUserInfo;

    // 빈칸 예외 처리
    const errorResult = { email: '' };
    errorResult.email = await isValidOnlyEmail(email);
    setErrorMessage(errorResult);
    if (Object.values(errorResult).find((el) => el !== '')) return;

    // 서버 통신
    const serverResult = await requestFindPassword(inputUserInfo);
    if (serverResult === true) dispatch(setModal('emailCert'));
    else {
      console.log('error!');
      setErrorMessage({ ...errorMessage, email: '이메일을 다시 확인해주세요.' });
    }
  };

  return (
    <>
      <Container>
        <h1>비밀번호 찾기</h1>
        <InputBox>
          <input type="text" placeholder="이메일을 입력하세요." onChange={handleInputValue('email')} onKeyUp={handleKeyUp}></input>
          <span>&nbsp;&nbsp;{errorMessage.email}</span>
        </InputBox>
        <button onClick={handleSubmit} value="FindPassword">
          인증 메일 발송
        </button>
      </Container>
    </>
  );
};

export default FindPassword;
