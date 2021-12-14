import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestSignOut } from '../../lib/requestUserInfo';
import styled from 'styled-components';
import { Button } from '../../styled/button/CommonButton.styled';

const Container = styled.div`
  width: 100%;
  height: 75%;
  text-align: center;

  p {
    /* font-family: IBMPlexSansKR-SemiBold; */
    font-size: 1.7rem;
    margin: 2.4rem 0;
  }
`;

const NewButton = styled(Button)`
  width: 38%;
  margin: 0;
`;

const Alert = ({ func }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    dispatch(setModal('close'));
    if (func === 'toSignOut') {
      requestSignOut();
      window.location.replace('/');
    } else if (func === 'toUserInfo') {
      navigate('/myinfo');
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <Container>
        <p>정보가 수정되었습니다.</p>
        <NewButton onClick={handleNavigate}>확인</NewButton>
      </Container>
    </>
  );
};

export default Alert;
