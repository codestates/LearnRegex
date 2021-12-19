import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestSetNewPassword } from '../../lib/requestUserInfo';
import { isValidSetNewPassword, isValidPassword, isValidPasswordConfirm } from '../../lib/validationFunction';
import { Container } from './SetNewPassword.styled';
import { InputInfoContainer, ContentContainer, Input, Span, NewButton, ButtonContainer, InputContainer, InfoContainer } from '../../styles/EditMyInfo.styled';
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
    console.log('입력했을 때 ', inputUserInfo);
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
    console.log('error', errorResult);
    if (Object.values(errorResult).find((el) => el !== '')) return;
    console.log('버튼 클릭했을 때 ', inputUserInfo); // password: 1234qwer, confirm: 1234qwer

    if (inputUserInfo.newPassword === inputUserInfo.confirm) {
      // * 서버 통신
      const serverResult = await requestSetNewPassword(inputUserInfo);
      if (serverResult === true) return dispatch(setModal('toHome'));
      else console.log('error!');
    } else if (inputUserInfo.newPassword !== inputUserInfo.confirm) {
      setErrorMessage({ ...inputUserInfo, newPassword: '', confirm: '비밀번호를 다시 확인하세요.' });
    }
  };

  return (
    <>
      <Container>
        <ContentContainer>
          <Span size={2.5} family={'Bold'} color={'dark-blue'} marginbottom={3}>
            비밀번호 재설정
          </Span>
          <InputInfoContainer>
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
          </ButtonContainer>
        </ContentContainer>
      </Container>
    </>
  );
};

export default SetNewPassword;
