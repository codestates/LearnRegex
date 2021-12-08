import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';

const Alert = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h3>정보가 수정되었습니다.</h3>
      <button onClick={() => dispatch(setModal('close'))}>확인</button>
    </>
  );
};

export default Alert;
