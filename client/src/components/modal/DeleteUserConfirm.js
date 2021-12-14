import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestDeleteUserInfo } from '../../lib/requestUserInfo';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 75%;
  text-align: center;
  padding: 2.2rem;

  p {
    font-size: 1.2rem;
    margin: 0.4rem 0;
  }
`;

const Button = styled.button`
  width: 37%;
  height: 40px;
  font-size: 1.2rem;
  border-radius: 1rem;
  margin: 1.2rem 0.3rem;
  font-family: IBMPlexSansKR-SemiBold;
  color: ${({ danger }) => {
    return danger ? `var(--color-red);` : `var(--color-black)`;
  }};

  transition: all 0.3s ease 0s;
  letter-spacing: 2.5px;
  :hover {
    transform: translateY(-2px);
    ${({ danger }) => {
      return danger
        ? `
      background-color: var(--color-red);
      color: white;
      box-shadow: 0px 5px 8px rgba(162, 69, 80, 0.4);
      `
        : `
      box-shadow: 0px 5px 8px rgba(63, 63, 63, 0.4);
        `;
    }}
  }
`;

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
      <Container>
        <p>등록한 퀴즈가 전부 삭제됩니다.</p>
        <p>정말 탈퇴하시겠습니까?</p>
        <Button onClick={() => dispatch(setModal('close'))}>취소</Button>
        <Button danger onClick={handleDeleteUser}>
          탈퇴
        </Button>
      </Container>
    </>
  );
};

export default DeleteUserConfirm;
