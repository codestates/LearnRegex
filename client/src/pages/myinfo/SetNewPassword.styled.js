import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 70%;
  /* border: 1px solid; */
  text-align: center;
  align-items: center;
  padding: 10rem 0 12rem 0;

  p {
    font-family: IBMPlexSansKR-Bold;
    color: var(--color-dark-blue);
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .box {
    width: 40%;
    height: 4rem;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    margin: 0.2rem 0;

    span {
      margin: 0.7rem 1rem 0 0;
    }

    .input {
      display: flex;
      flex-direction: column;
      height: 4rem;
      text-align: left;
      margin: 0.1rem 0;
      /* border: 1px solid; */

      input {
        width: 100%;
        height: 2.5rem;
        background-color: var(--color-gray);
        border-radius: 7px;
        opacity: 0.7;
        padding: 0 0.6rem 0 0.6rem;
      }

      span {
        color: var(--color-red);
        opacity: 0.8;
        font-size: 0.9rem;
        margin: 0 0;
      }
    }
  }

  button {
    width: 20%;
    height: 40px;
    font-size: 1.3rem;
    border-radius: 1rem;
    margin: 4rem 0 0;
    background-color: var(--color-blue);
    color: white;

    transition: all 0.3s ease 0s;
    letter-spacing: 2.5px;
    :hover {
      box-shadow: 0px 5px 8px rgba(171, 180, 221, 0.4);
      transform: translateY(-2px);
    }
  }
`;
