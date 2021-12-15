import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const GetStartedButton = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? 'var(--color-blue)' : 'var(--color-gray')};
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
  box-shadow: 0px 5px 8px rgba(171, 180, 221, 0.8);

  :hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-5px);
    /* box-shadow: 0px 5px 8px rgba(171, 180, 221, 1); */
    background-color: ${({ primary }) => (primary ? 'var(--color-blue)' : 'var(--color-light-blue)')};
  }
`;
