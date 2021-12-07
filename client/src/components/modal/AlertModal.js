import React from 'react';

//* AlertModal 종류
//* 1. 기본 안내 모달(AlertModal)
//* : 비밀번호 변경 확인, 회원 정보 수정 확인, 회원 탈퇴여부 확인, 다음에 또 만나요, 초기화 여부 확인

//* 2. 인증메일 안내 모달(EmailCertModal)
//* : FindPasswordModal에서 "인증메일 발송" 버튼, UserInfoModal-SignUp에서 "회원가입" 버튼, 회원정보수정 페이지에서 이메일 변경 후 "수정 완료" 버튼

//// 3. 비밀번호 찾기(FindPasswordModal)

const AlertModal = () => {
  return (
    <>
      <div>Hello Alert Modal !</div>
      <div>이것은 기본 안내 모달</div>
      <button>확인</button>
    </>
  );
};

export default AlertModal;
