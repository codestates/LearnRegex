import styled from 'styled-components';
import { MdCancel } from 'react-icons/md';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import { Button } from '../../styles/button/CommonButton.styled';

export const CloseIcon = styled(MdCancel)`
  font-size: 3rem;
  transition: all ease 0.4s;
  cursor: pointer;
  color: var(--color-dark-gray);

  :hover {
    color: var(--color-dark-blue);
  }
`;

export const NotClearIcon = styled(BsCheckCircle)`
  font-size: 2.1rem;
  transition: all ease 0.4s;
`;

export const ClearIcon = styled(BsCheckCircleFill)`
  font-size: 2.1rem;
  transition: all ease 0.4s;
  color: var(--color-green);
`;

export const ResetButton = styled(Button)`
  background-color: var(--color-dark-gray);

  :hover {
    background-color: var(--color-blue);
  }

  @media screen and (max-width: 768px) {
    width: 35%;
  }
`;
