import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ isOpen }) => (isOpen ? '' : 'none')};
  border: 1px solid;
`;
