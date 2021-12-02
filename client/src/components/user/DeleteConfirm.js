// TODO 정말로 삭제하실건가요? 물어보는 모달모달
import React, { useState } from 'react';
import { requestDeleteUserInfo } from '../../lib/requestUserInfo';
const DeleteConfirm = () => {
  const [userDeleted, setUserDeleted] = useState(false);
  const handleSubmit = async (e) => {
    const buttonType = e.target.value;
    if (buttonType === 'ok') {
      const result = await requestDeleteUserInfo();
      if (result) setUserDeleted(true);
      else console.log('error!');
    } else if (buttonType === 'not yet') {
    } else if (buttonType === 'bye') {
      setUserDeleted(false);
    }
  };

  return (
    <>
      <h1>DeleteUserInfo</h1>
      {userDeleted ? (
        <div>
          <p>다음에 또 만나요.</p>
          <input type="button" onClick={handleSubmit} value="bye" />
        </div>
      ) : (
        <div>
          <p>정말 탈퇴하겠습니까?</p>
          <input type="button" onClick={handleSubmit} value="ok" />
          <input type="button" onClick={handleSubmit} value="not yet" />
        </div>
      )}
    </>
  );
};
export default DeleteConfirm;
