import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestEditUserInfo } from '../../lib/requestUserInfo';
import { isValidEditUserInfo, isValidEmail, isValidNickname } from '../../lib/validationFunction';
import dotenv from 'dotenv';
dotenv.config();

export const EditMyInfo = ({ myInfo }) => {
  const dispatch = useDispatch();

  // export const EditUserInfo = () => {
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
      navigate('/myinfo');
      if (myInfo.email !== inputUserInfo.email) dispatch(setModal('emailCert'));
      else dispatch(setModal('alert'));
    } else console.log('error!');
  };

  return (
    <>
      <div>
        <h1>EditMyInfo</h1>
        <h2>Email</h2>
        {myInfo.socialType === 'local' ? ( //
          <input type="text" onChange={handleInputValue('email')} value={inputUserInfo.email} onKeyUp={handleKeyUp}></input>
        ) : (
          <p>{'Login as ' + myInfo.socialType}</p>
        )}
        <p>{errorMessage.email}&nbsp;</p>

        <h2>Nickname</h2>
        <input type="text" onChange={handleInputValue('nickname')} value={inputUserInfo.nickname} onKeyUp={handleKeyUp}></input>
        <p>{errorMessage.nickname}&nbsp;</p>
        <input type="button" onClick={handleSubmit} value="수정 완료" />
        <input type="button" onClick={() => navigate('/myinfo')} value="취소" />
      </div>
    </>
  );
};

export default EditMyInfo;
