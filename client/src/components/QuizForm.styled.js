import styled from 'styled-components';
import { Button } from '../styles/button/CommonButton.styled';

export const Container = styled.div`
  border: 3px solid;
  box-shadow: 0px 5px 8px rgba(63, 63, 63, 0.4);
  padding: 5rem 2.4rem;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  /* width: fit-content; */
  /* width: 100%;
  margin: 0 */
`;

export const Span = styled.span`
  font-size: 2.4rem;
  font-family: IBMPlexSansKR-SemiBold;
  color: var(--color-blue);
  margin-bottom: 0.5rem;
  cursor: default;
`;

export const Input = styled.input.attrs({})`
  height: 5rem;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  margin-bottom: 3rem;
  background-color: var(--color-light-gray);
  font-family: D2Coding;
`;

export const AnswerButton = styled(Button)`
  width: 15rem;
  height: 3.2rem;
  /* align-items: center; */
  justify-content: center;
  margin: auto;
`;
