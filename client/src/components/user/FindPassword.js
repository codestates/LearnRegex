import React, { useState } from 'react';
import { requestFindPassword } from '../../lib/requestUserInfo';
import { isValidOnlyEmail } from '../../lib/validationFunction';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';

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
    if (serverResult) dispatch(setModal('emailCert'));
    else console.log('error!');
  };

  return (
    <>
      <h1>FindPassword</h1>
      <input type="text" onChange={handleInputValue('email')} onKeyUp={handleKeyUp}></input>
      <p>{errorMessage.email}&nbsp;</p>
      <input type="button" onClick={handleSubmit} value="FindPassword" />
    </>
  );
};

export default FindPassword;
