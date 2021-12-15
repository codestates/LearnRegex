import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestDeleteUserInfo } from '../../lib/requestUserInfo';
import { Button } from '../../styles/button/CommonButton.styled';
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

const DeleteButton = styled(Button)`
  width: 37%;
  margin: 1.2rem 0.3rem;
  font-family: IBMPlexSansKR-SemiBold;
  background-color: var(--color-white);
  color: ${({ danger }) => {
    return danger ? `var(--color-red);` : `var(--color-black)`;
  }};

  :hover {
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
        <DeleteButton onClick={() => dispatch(setModal('close'))}>취소</DeleteButton>
        <DeleteButton danger onClick={handleDeleteUser}>
          탈퇴
        </DeleteButton>
      </Container>
    </>
  );
};

export default DeleteUserConfirm;
