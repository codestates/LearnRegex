import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestGetMyInfo } from '../../lib/requestUserInfo';
import dotenv from 'dotenv';
import { EditMyInfo } from './EditMyInfo';
import { EditMyPassword } from './EditMyPassword';
import { checkUserIsLogin } from '../../lib/checkIsLogin';
dotenv.config();

const MyInfo = () => {
  if (!checkUserIsLogin()) window.location.replace('/');
  const dispatch = useDispatch();
  const [Pages, setPages] = useState('');
  const [myInfo, setMyInfo] = useState({
    email: '',
    nickname: '',
    makeQuiz: 0,
    clearQuiz: 0,
    socialType: '',
  });
  useEffect(() => {
    const getMyInfo = async () => {
      const resultMyInfo = await requestGetMyInfo();
      if (resultMyInfo) setMyInfo(resultMyInfo.data.data);
    };
    getMyInfo();
  }, []);

  const handleEditMyInfo = () => {
    setPages('EditMyInfo');
  };

  const handleEditMyPassword = () => {
    setPages('EditMyPassword');
  };

  const handleDeleteMyInfo = () => {
    dispatch(setModal('deleteUserConfirm'));
  };

  const PrintModifyPages = () => {
    if (Pages === 'EditMyInfo') return <EditMyInfo myInfo={myInfo} />;
    else if (Pages === 'EditMyPassword') return <EditMyPassword />;
    else return <Modify />;
  };

  const Modify = () => {
    return (
      <>
        <h3>Modify</h3>
        <p>Email: {myInfo.socialType === 'local' ? myInfo.email : 'Login as ' + myInfo.socialType}</p>
        <p>Nickname: {myInfo.nickname}</p>
        <button onClick={handleEditMyInfo}>프로필 수정</button>
        {myInfo.socialType === 'local' ? <button onClick={handleEditMyPassword}>비밀번호 수정</button> : <></>}
        <button onClick={handleDeleteMyInfo}>회원 탈퇴</button>
      </>
    );
  };

  return (
    <>
      <PrintModifyPages />
    </>
  );
};

export default MyInfo;
