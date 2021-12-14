import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import { BsPersonFill } from 'react-icons/bs';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { MdQuiz } from 'react-icons/md';

export const Container = styled.div`
  width: 70%;
  margin: auto;
  text-align: center;
  /* border: 1px solid; */
  padding: 6.7rem 0 12rem 0;
  display: flex;
  justify-content: center;

  p {
    font-size: 2rem;
    font-family: IBMPlexSansKR-Bold;
    margin: 2.8rem 0;
    color: var(--color-dark-blue);
  }

  .tmp {
    padding: 1rem 2rem 0.5rem 2rem;
    /* border: 1px solid; */
    box-shadow: 0px 5px 8px rgba(171, 180, 221, 0.4);
  }

  .content {
    width: 100%;
    height: 3.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 2rem;
    margin-right: 1rem;
  }

  button {
    width: 32%;
    height: 40px;
    font-size: 1.3rem;
    border-radius: 1rem;
    margin: 3.5rem 0 2rem 0;
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

export const Span = styled.div`
  ${({ category }) => {
    if (category) {
      const css = `
        width: 8.7rem;
        height: 2.4rem;
        background-color: var(--color-light-blue);
        color: var(--color-white);
        letter-spacing: 2px;
        font-family: IBMPlexSansKR-SemiBold;
        padding: 0.6rem 0 0 0;
        `;
      return css;
    } else {
      const css = `
        width: 20rem;
        height: 2.4rem;
        border-bottom: 2px solid rgba(230, 230, 230, 0.6);
        padding: 0 0.6rem;
        padding: 0.6rem 0 0 1rem;
        text-align: left;
      `;
      return css;
    }
  }}
`;

export const EmailIcon = styled(MdEmail)`
  font-size: 2.2rem;
  margin-right: 1rem;
  color: var(--color-light-gray);
`;

export const NicknameIcon = styled(BsPersonFill)`
  font-size: 2.2rem;
  margin-right: 1rem;
  color: var(--color-light-gray);
`;

export const RegisterQuizIcon = styled(MdQuiz)`
  font-size: 2.2rem;
  margin-right: 1rem;
  color: var(--color-light-gray);
`;

export const ClearQuizIcon = styled(BsFillCheckSquareFill)`
  font-size: 2.2rem;
  margin-right: 1rem;
  color: var(--color-light-gray);
`;
