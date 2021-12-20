import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestEditUserPassword } from '../../lib/requestUserInfo';
import { isValidEditUserPassword, isValidPassword, isValidPasswordConfirm } from '../../lib/validationFunction';
import { Container } from './EditMyPassword.styled';
import { InputInfoContainer, ContentContainer, Input, Span, NewButton, ButtonContainer, InputContainer, InfoContainer } from '../../styles/EditMyInfo.styled';

import dotenv from 'dotenv';
dotenv.config();

export const EditMyPassword = () => {
  const dispatch = useDispatch();

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
  const navigate = useNavigate();

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
    if (Object.values(errorResult).find((el) => el !== '')) return;

    if (inputUserInfo.newPassword === inputUserInfo.confirm) {
      // * 서버 통신
      const serverResult = await requestEditUserPassword(inputUserInfo);
      if (serverResult === true) dispatch(setModal('toSignOut'));
      else if (serverResult === 'invalid oldPassword') {
        setErrorMessage({ ...errorResult, oldPassword: '잘못된 비밀번호입니다.' });
      } else {
        setErrorMessage({ ...errorResult, oldPassword: '잠시후에 다시 시도해주세요.' });
      }
    } else {
      setErrorMessage({ ...errorMessage, confirm: '비밀번호를 다시 확인하세요.' });
    }
  };

  return (
    <>
      <Container>
        <ContentContainer>
          <Span size={2.5} family={'Bold'} color={'dark-blue'} marginbottom={3}>
            비밀번호 수정
          </Span>
          <InputInfoContainer>
            <InfoContainer>
              <Span size={1.3} family={'Medium'} marginright={0.7} margintop={0.7} mobilemargintop={0.6}>
                현재 비밀번호
              </Span>
              <InputContainer>
                <Input type="password" onChange={handleInputValue('oldPassword')} onKeyUp={handleKeyUp} />
                <Span margintop={0.5} color={'red'}>
                  &nbsp;{errorMessage.oldPassword}
                </Span>
              </InputContainer>
            </InfoContainer>
            <InfoContainer>
              <Span size={1.3} family={'Medium'} marginright={0.7} margintop={0.7} mobilemargintop={0.6}>
                새로운 비밀번호
              </Span>
              <InputContainer>
                <Input type="password" onChange={handleInputValue('newPassword')} onKeyUp={handleKeyUp} />
                <Span margintop={0.5} color={'red'}>
                  &nbsp;{errorMessage.newPassword}
                </Span>
              </InputContainer>
            </InfoContainer>
            <InfoContainer>
              <Span size={1.3} family={'Medium'} marginright={0.7} margintop={0.7} mobilemargintop={0.6}>
                비밀번호 재입력
              </Span>
              <InputContainer>
                <Input type="password" onChange={handleInputValue('confirm')} onKeyUp={handleKeyUp} />
                <Span margintop={0.5} color={'red'}>
                  &nbsp;{errorMessage.confirm}
                </Span>
              </InputContainer>
            </InfoContainer>
          </InputInfoContainer>
          <ButtonContainer>
            <NewButton onClick={handleSubmit}>수정 완료</NewButton>
            <NewButton onClick={() => navigate('/myinfo')}>취소</NewButton>
          </ButtonContainer>
        </ContentContainer>
      </Container>
    </>
  );
};

export default EditMyPassword;
