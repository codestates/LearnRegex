import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const LinkButton = styled(LinkR)`
  border-radius: 50px;
  background-color: var(--color-blue);
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: var(--color-white);
  font-size: 1.2rem;
  font-family: 'IBMPlexSansKR-SemiBold';
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 5px 8px rgba(051, 102, 153, 0.5);

  :hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-5px);
    background-color: ${({ primary }) => (primary ? 'var(--color-blue)' : 'var(--color-light-blue)')};
  }
`;
