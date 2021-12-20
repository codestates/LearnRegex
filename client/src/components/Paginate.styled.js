import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  margin-top: 6rem;
  text-align: center;

  ul {
    margin: 0 2rem;
    text-align: center;
  }

  span {
    font-family: IBMPlexSansKR-SemiBold;
    cursor: pointer;
  }
`;

export const List = styled.li`
  display: inline;
  transition: color 0.3s;
  color: ${({ current }) => (current ? `var(--color-dark-blue)` : '')};
  font-size: ${({ current }) => (current ? '2rem' : '')};
  font-family: ${({ current }) => (current ? 'IBMPlexSansKR-SemiBold' : '')};
  margin: 0 2rem;
  cursor: pointer;

  :hover {
    color: var(--color-blue);
  }
`;
