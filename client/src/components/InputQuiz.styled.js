import styled from 'styled-components';
import { ShadowBox } from '../styles/ShadowBox.styled';
import { Button } from '../styles/button/CommonButton.styled';
import { AiFillPlusSquare } from 'react-icons/ai';

export const Container = styled(ShadowBox)`
  /* border: 4px solid; */
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 70rem;
  height: 100%;
  padding: 1.2rem 2.4rem 5rem;

  @media screen and (max-width: 1180px) {
    width: auto;
    margin: 0 2rem;
  }

  @media screen and (max-width: 768px) {
    width: auto;
    margin: 0 2rem;
  }
`;

export const Input = styled.input.attrs({})`
  border: ${({ isEmpty }) => (isEmpty ? `2px solid var(--color-red)` : `2px solid var(--color-light-blue)`)};
  /* border: 2px solid ${({ isEmpty }) => (isEmpty ? 'red' : 'black')}; */
  font-size: ${(prop) => prop.size}rem;
  margin-bottom: ${(prop) => prop.margin}rem;
  margin-top: ${(prop) => prop.top}rem;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;

  @media screen and (max-width: 963px) {
    font-size: ${(prop) => prop.mobilesize}rem;
  }
`;

export const Textarea = styled.textarea.attrs({})`
  border: ${({ isEmpty }) => (isEmpty ? `2px solid var(--color-red)` : `2px solid var(--color-light-blue)`)};
  resize: none;
  height: 8rem;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
`;

export const Span = styled.span`
  font-size: 2.4rem;
  font-family: IBMPlexSansKR-SemiBold;
  color: var(--color-blue);
  margin-bottom: 0.5rem;
  cursor: default;
  margin-top: ${(prop) => prop.margintop}rem;
`;

export const SubmitButton = styled(Button)`
  width: 15rem;
  height: 3.2rem;
  justify-content: center;
  margin: 4rem auto 0;
`;

export const PlusTestCaseIcon = styled(AiFillPlusSquare)`
  transition: color 0.4s;
  color: var(--color-light-blue);
  font-size: 2.8rem;
  cursor: pointer;
  justify-content: center;
  margin: 0 auto 2rem;

  :hover {
    color: var(--color-dark-blue);
  }
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
