import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const GetStartedButton = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? 'var(--color-blue)' : 'var(--color-gray')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: var(--color-white);
  font-size: 1rem;
  font-family: 'IBMPlexSansKR-SemiBold';
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ primary }) => (primary ? 'var(--color-blue)' : 'var(--color-light-blue)')};
  }
`;
