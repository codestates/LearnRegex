import styled from 'styled-components';
import { Button } from '../../styled/button/CommonButton.styled';
import { ShadowBox } from '../../styled/shadowBox.styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 70%;
  text-align: center;
  align-items: center;
  padding: 10rem 0 12rem 0;
  /* border: 1px solid; */

  p {
    font-size: 2rem;
    font-family: IBMPlexSansKR-Bold;
    color: var(--color-dark-blue);
    margin-bottom: 4.5rem;
    /* border: 1px solid; */
  }

  .content {
    width: 100%;
    display: flex;
    /* border: 1px solid; */
    align-items: center;
    justify-content: center;
    margin: 0.4rem 0;

    span {
      /* width: 20rem; */
      margin-bottom: 0.8rem;
      text-align: right;
      padding-right: 1rem;
    }
  }
`;

export const Box = styled(ShadowBox)``;

export const NewButton = styled(Button)`
  width: 12rem;
  margin: 2.9rem 0 4rem 0;
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
    margin: 0;
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
