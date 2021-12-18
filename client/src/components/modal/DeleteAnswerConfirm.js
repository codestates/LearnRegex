import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { resetAnswerTutorial } from '../../modules/answer';
import { resetClearList } from '../../modules/list';

const DeleteAnswerConfirm = () => {
  const dispatch = useDispatch();

  const handleReset = async () => {
    await dispatch(resetAnswerTutorial());
    await dispatch(resetClearList());
    window.location.replace('/tutorial');
  };

  return (
    <>
      <h3>정답 초기화</h3>
      <div>작성한 정답이 모두 초기화 됩니다.</div>
      <div>정말 초기화 하시겠습니까?</div>
      <button onClick={handleReset}>예</button>
      <button onClick={() => dispatch(setModal('close'))}>아니오</button>
    </>
  );
};

export default DeleteAnswerConfirm;
