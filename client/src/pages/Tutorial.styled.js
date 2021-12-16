import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 70%;
  margin: auto;

  p {
    font-family: IBMPlexSansKR-Bold;
    font-size: 3rem;
  }

  .content {
    width: 65%;
    background-color: var(--color-white);
    padding: 10rem 0 4rem 0;
    text-align: center;
    border: 1px solid;
  }

  .side {
    width: 35%;
    background-color: var(--color-gray);
    padding: 4.5rem 0 4rem 0;
    border: 1px solid;
  }
`;
