import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestDeleteUserInfo } from '../../lib/requestUserInfo';

const DeleteUserConfirm = () => {
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    const result = requestDeleteUserInfo();
    if (result) {
      dispatch(setModal('close'));
      window.location.replace('/');
    }
  };
  return (
    <>
      <h3>회원탈퇴</h3>
      <div>정말 탈퇴하겠습니까?</div>
      <button onClick={handleDeleteUser}>예</button>
      <button onClick={() => dispatch(setModal('close'))}>아니오</button>
    </>
  );
};

export default DeleteUserConfirm;
