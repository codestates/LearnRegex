import styled from 'styled-components';
import { MdCancel } from 'react-icons/md';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import { Button } from '../../styles/button/CommonButton.styled';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0;
  margin-bottom: 0.7rem;
  min-height: 3rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CloseIcon = styled(MdCancel)`
  font-size: 2.5rem;
  transition: all ease 0.4s;
  cursor: pointer;
  color: var(--color-dark-gray);

  :hover {
    color: var(--color-dark-blue);
  }
`;

export const NotClearIcon = styled(BsCheckCircle)`
  font-size: 1.4rem;
  transition: all ease 0.4s;
  margin-left: 0.3rem;
  opacity: 0.6;
`;

export const ClearIcon = styled(BsCheckCircleFill)`
  font-size: 1.4rem;
  transition: all ease 0.4s;
  color: var(--color-green);
  margin-left: 0.3rem;
`;

export const ResetButton = styled(Button)`
  background-color: var(--color-dark-gray);
  align-self: center;

  :hover {
    background-color: var(--color-blue);
  }

  @media screen and (max-width: 768px) {
    width: 35%;
  }
`;
