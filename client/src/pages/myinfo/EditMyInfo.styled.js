import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 70%;
  text-align: center;
  align-items: center;
  padding: 10rem 0 12rem 0;

  p {
    font-size: 2rem;
    font-family: IBMPlexSansKR-Bold;
    color: var(--color-dark-blue);
    margin-bottom: 4.5rem;
  }

  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.4rem 0;

    span {
      font-family: IBMPlexSansKR-SemiBold;
      font-size: 1.2rem;
      margin-bottom: 1.2rem;
      text-align: right;
      padding-right: 1rem;
    }
  }

  .buttonBox {
    width: 100%;
    margin: 1rem 0;

    button {
      width: 12rem;
      height: 40px;
      font-size: 1.3rem;
      border-radius: 1rem;
      margin: 0.3rem 1rem;
      background-color: var(--color-blue);
      color: white;

      transition: all 0.3s ease 0s;
      letter-spacing: 2.5px;
      :hover {
        box-shadow: 0px 5px 8px rgba(171, 180, 221, 0.4);
        transform: translateY(-2px);
      }
    }
  }
`;

export const InputBox = styled.div`
  width: 20rem;
  height: 4rem;
  text-align: left;
  margin: 0.1rem 0;

  p {
    color: var(--color-red);
    opacity: 0.8;
    font-size: 0.9rem;
  }
`;

export const Input = styled.input.attrs({})`
  width: 100%;
  height: 2.5rem;
  background-color: var(--color-gray);
  border-radius: 7px;
  opacity: 0.7;
  padding: 0 0.6rem 0 0.6rem;
`;
