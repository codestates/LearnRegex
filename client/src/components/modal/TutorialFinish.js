import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import styled from 'styled-components';
import { Button } from '../../styles/button/CommonButton.styled';

const Container = styled.div`
  width: 100%;
  height: 75%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
`;

const P = styled.p`
  font-size: ${(prop) => prop.size}rem;
  margin: ${(prop) => prop.margin};
`;

const NewButton = styled(Button)`
  width: 38%;
  margin: 0;
`;

const TutorialFinish = () => {
  const dispatch = useDispatch();

  const handleNavigate = () => {
    dispatch(setModal('close'));
  };

  return (
    <>
      <Container>
        <P size={1.7} margin={'0 0 2rem'}>
          축하합니다!
        </P>
        <P margin={'0 0 0.5rem'}>학습하기 과정을 모두 마쳤습니다.</P>
        <P margin={'0 0 1.5rem'}>다른 사용자가 만든 퀴즈에 도전해보세요!</P>
        <NewButton onClick={handleNavigate}>확인</NewButton>
      </Container>
    </>
  );
};

export default TutorialFinish;
