import styled from 'styled-components';
import { ContentContainer, Span } from '../../styles/EditMyInfo.styled';

export const Container = styled.div`
  display: flex;
  margin: 7rem auto;
  width: 100%;
  justify-content: center;

  hr {
    width: 100%;
    border: dashed 1px;
    color: var(--color-light-blue);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1.2rem 0;

  border-bottom: 1px solid var(--color-light-blue);

  width: 100%;
`;

export const ContentWrap = styled.div`
  display: flex;

  @media screen and (max-width: 1140px) {
    flex-direction: column;
  }
`;

export const Content = styled(ContentContainer)`
  width: 28rem;
  margin: 0 5rem 3rem;
  padding: ${({ padding }) => (padding ? '0 4rem' : '0')};
`;

export const ButtonElement = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpanElement = styled(Span)`
  background-color: ${(prop) => `var(--color-${prop.backcolor})`};
  color: ${(prop) => `var(--color-${prop.color})`};
  padding: ${({ category }) => (category ? '0.3rem 1.2rem' : '0 0.7rem')};
`;
