import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { resetAnswerTutorial } from '../../modules/answer';
import { Button } from '../../styles/button/CommonButton.styled';
import { resetClearList } from '../../modules/list';
import { saveBookmark } from '../../modules/bookmark';

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

const ResetButton = styled(Button)`
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

const DeleteAnswerConfirm = () => {
  const dispatch = useDispatch();

  const handleReset = async () => {
    await dispatch(resetAnswerTutorial());
    await dispatch(resetClearList());
    await dispatch(saveBookmark(0));
    window.location.replace('/tutorial');
  };

  return (
    <>
      <Container>
        <p>작성한 정답이 모두 초기화 됩니다.</p>
        <p>정말 초기화 하시겠습니까?</p>
        <ResetButton onClick={() => dispatch(setModal('close'))}>아니오</ResetButton>
        <ResetButton danger onClick={handleReset}>
          예
        </ResetButton>
      </Container>
    </>
  );
};

export default DeleteAnswerConfirm;
