import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid; */
  font-size: 1.7rem;
  margin-top: 6rem;
  text-align: center;

  ul {
    /* border: 1px solid; */
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
  /* float: left; */
  /* border: 1px solid; */
  margin: 0 2rem;
  /* padding: 1rem 0; */
  /* margin-top: ${({ current }) => (current ? '' : '1rem')}; */
  cursor: pointer;

  :hover {
    color: var(--color-blue);
    /* ${({ current }) => (current ? '' : `color: var(--color-blue)`)}; */
  }
`;
