import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const ScrollButton = styled(LinkS)`
  border-radius: 50px;
  background: var(--color-blue);
  white-space: nowrap;
  padding: 12px 30px;
  color: var(--color-white);
  font-size: 1.2rem;
  font-family: 'IBMPlexSansKR-SemiBold';
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 5px 8px rgba(051, 102, 153, 0.5);

  :hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-5px);
    background-color: var(--color-light-blue);
    color: var(--color-black);
  }
`;
