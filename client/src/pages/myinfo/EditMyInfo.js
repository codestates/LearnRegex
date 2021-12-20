import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestEditUserInfo } from '../../lib/requestUserInfo';
import { isValidEditUserInfo, isValidEmail, isValidNickname } from '../../lib/validationFunction';
import { Container } from './EditMyInfo.styled';
import { InputInfoContainer, ContentContainer, Input, Span, NewButton, ButtonContainer, InputContainer, InfoContainer } from '../../styles/EditMyInfo.styled';
import dotenv from 'dotenv';
dotenv.config();

export const EditMyInfo = ({ myInfo }) => {
  const dispatch = useDispatch();

  const [inputUserInfo, setInputUserInfo] = useState({
    email: myInfo.email,
    nickname: myInfo.nickname,
  });

  const [errorMessage, setErrorMessage] = useState({
    email: '',
    nickname: '',
  });
  const navigate = useNavigate();

  // * 키 입력 0.5초 기다리고 유효성 검사
  const timeWait = useRef();
  const handleInputValue = (key) => (e) => {
    const inputKey = e.target.value;
    setInputUserInfo({ ...inputUserInfo, [key]: inputKey });
    clearTimeout(timeWait.current);
    timeWait.current = setTimeout(async () => {
      if (key === 'email') setErrorMessage({ ...errorMessage, email: await isValidEmail(inputKey, myInfo.email) });
      else if (key === 'nickname') setErrorMessage({ ...errorMessage, nickname: await isValidNickname(inputKey, myInfo.nickname) });
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
    const errorResult = await isValidEditUserInfo(inputUserInfo, { email: myInfo.email, nickname: myInfo.nickname });
    setErrorMessage(errorResult);
    console.log(errorResult);
    if (Object.values(errorResult).find((el) => el !== '')) return;

    // * 서버 통신
    const serverResult = await requestEditUserInfo(inputUserInfo);
    if (serverResult === true) {
      if (myInfo.email !== inputUserInfo.email) dispatch(setModal('emailCert'));
      else dispatch(setModal('toUserInfo'));
    } else console.log('error!');
    navigate('/myinfo');
  };

  return (
    <>
      <Container>
        <ContentContainer>
          <Span size={2.5} family={'Bold'} color={'dark-blue'} marginbottom={3}>
            프로필 수정
          </Span>
          <InputInfoContainer>
            <InfoContainer>
              <Span size={1.3} family={'Medium'} marginright={0.7} margintop={0.7} mobilemargintop={0.6}>
                이메일
              </Span>
              <InputContainer>
                {myInfo.socialType === 'local' ? ( //
                  <Input type="text" onChange={handleInputValue('email')} value={inputUserInfo.email} onKeyUp={handleKeyUp}></Input>
                ) : (
                  <Span oauth>{myInfo.socialType + ' 로그인'}</Span>
                )}
                <Span margintop={0.5} color={'red'}>
                  &nbsp;{errorMessage.email}
                </Span>
              </InputContainer>
            </InfoContainer>
            <InfoContainer>
              <Span size={1.3} family={'Medium'} marginright={0.7} margintop={0.7} mobilemargintop={0.6}>
                닉네임
              </Span>
              <InputContainer>
                <Input type="text" onChange={handleInputValue('nickname')} value={inputUserInfo.nickname} onKeyUp={handleKeyUp}></Input>
                <Span margintop={0.5} color={'red'}>
                  &nbsp;{errorMessage.nickname}
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

export default EditMyInfo;
