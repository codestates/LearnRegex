import styled from 'styled-components';
import { ContentContainer, Span } from '../../styles/EditMyInfo.styled';

export const Container = styled.div`
  display: flex;
  margin: 7rem auto;
  width: 100%;
  justify-content: center;
  /* border: 1px solid; */

  hr {
    width: 100%;
    border: dashed 1px;
    color: var(--color-light-blue);
  }
`;

export const InfoContainer = styled.div`
  /* border: 1px solid; */
  /* margin: 1rem; */
  /* padding: 1rem; */
  /* margin-bottom: 1.5rem; */
  display: flex;
  /* justify-content: center; */
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

// export const SpanElement = styled(Span)`

// `;

export const SpanElement = styled(Span)`
  background-color: ${(prop) => `var(--color-${prop.backcolor})`};
  color: ${(prop) => `var(--color-${prop.color})`};
  padding: ${({ category }) => (category ? '0.3rem 1.2rem' : '0 0.7rem')};
`;

// export const Container = styled.div`
//   width: 100%;
//   text-align: center;
//   margin: auto;
//   display: flex;
//   justify-content: center;
//   padding: 12rem 0 12rem 0;
//   /* border: 1px solid; */
//   align-items: center;

//   .contentBox {
//     margin-top: 6rem;
//   }

//   .content {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 1.3rem;
//   }
//   hr {
//     border: dashed 1px;
//     color: var(--color-light-blue);
//   }

//   .buttonBox {
//     display: flex;
//     height: 50%;
//     justify-content: center;
//     align-items: center;
//     /* border: 1px solid; */

//     p {
//       color: var(--color-red);
//     }
//   }
// `;

// export const Box = styled(ShadowBox)`
//   width: 30rem;
//   margin: 0 2rem;
//   padding: 0;
//   background-color: var(--color-white);
// `;

// export const NewButton = styled(Button)`
//   width: 12rem;
//   ${({ danger }) => {
//     return danger ? `background-color: var(--color-dark-gray);` : `background-color: var(--color-blue);`;
//   }}
//   margin: 0;
// `;
