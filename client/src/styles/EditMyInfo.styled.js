import styled from 'styled-components';
import { ShadowBox } from './ShadowBox.styled';
import { Button } from './button/CommonButton.styled';

export const ContentContainer = styled(ShadowBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: var(--color-white);
  height: auto;
  min-height: 30rem;
  padding: 4rem 2rem;

  @media screen and (max-width: 768px) {
    width: auto;
    margin: 0 2rem;
  }
`;

export const InputInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: auto;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-right: auto;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  background-color: var(--color-gray);
  border-radius: 7px;
  opacity: 0.7;
  padding: 0 0.6rem;
  min-width: 17rem;
`;

export const Span = styled.span`
  font-family: ${(prop) => `IBMPlexSansKR-${prop.family}`};
  font-size: ${(prop) => prop.size}rem;
  color: ${(prop) => `var(--color-${prop.color})`};
  margin-right: ${(prop) => prop.marginright}rem;
  margin-bottom: ${(prop) => prop.marginbottom}rem;
  margin-top: ${(prop) => prop.margintop}rem;
  ${({ oauth }) => {
    const css = `
        width: 100%;
        height: 2.5rem;
        background-color: var(--color-gray);
        border-radius: 7px;
        padding: 0 0.6rem;
        min-width: 17rem;
        padding-top: 0.7rem;
          `;
    return oauth ? css : '';
  }}
  cursor: default;

  @media screen and (max-width: 768px) {
    margin-top: ${(prop) => prop.mobilemargintop}rem;
  }
`;

export const NewButton = styled(Button)`
  width: 12rem;
  background-color: ${({ danger }) => (danger ? `var(--color-dark-gray)` : ``)};
  margin-top: ${({ editInfo }) => (editInfo ? '3rem' : '')};

  @media screen and (max-width: 768px) {
    width: 12rem;
  }
`;
