import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestSignOut } from '../../lib/requestUserInfo';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 75%;
  text-align: center;

  p {
    /* font-family: IBMPlexSansKR-SemiBold; */
    font-size: 1.7rem;
    margin: 2.4rem 0;
  }

  button {
    width: 38%;
    height: 40px;
    font-size: 1.2rem;
    border-radius: 1rem;
    background-color: var(--color-blue);
    color: white;

    transition: all 0.3s ease 0s;
    letter-spacing: 2.5px;
    :hover {
      box-shadow: 0px 5px 8px rgba(171, 180, 221, 0.4);
      transform: translateY(-2px);
    }
  }
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
        <button onClick={handleNavigate}>확인</button>
      </Container>
    </>
  );
};

export default Alert;
