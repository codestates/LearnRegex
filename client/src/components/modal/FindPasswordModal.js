import React from 'react';

const FindPasswordModal = ({ setModalState }) => {
  return (
    <>
      <div>
        <h2>비밀번호 찾기</h2>
        <input type="text" placeholder="이메일을 입력하세요." />
        <div>유효성 검사 뜨는 부분</div>
        <button onClick={() => setModalState('emailCertAlert')}>인증메일 발송</button>
      </div>
    </>
  );
};

export default FindPasswordModal;
