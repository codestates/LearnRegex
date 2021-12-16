import styled from 'styled-components';
import { MdCancel } from 'react-icons/md';

export const Container = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  height: 100%;
  background-color: var(--color-gray);
  border: 1px solid;
`;

export const CloseIcon = styled(MdCancel)`
  font-size: 3.8rem;
`;
