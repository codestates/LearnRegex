import styled from 'styled-components';
import { Button } from '../../styles/button/CommonButton.styled';
import { ShadowBox } from '../../styles/ShadowBox.styled';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 12rem 0 12rem 0;
  /* border: 1px solid; */
  align-items: center;

  .contentBox {
    margin-top: 6rem;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.3rem;
  }
  hr {
    border: dashed 1px;
    color: var(--color-light-blue);
  }

  .buttonBox {
    display: flex;
    height: 50%;
    justify-content: center;
    align-items: center;
    /* border: 1px solid; */

    p {
      color: var(--color-red);
    }
  }
`;

export const Box = styled(ShadowBox)`
  width: 30rem;
  margin: 0 2rem;
  padding: 0;
  background-color: var(--color-white);
`;

export const NewButton = styled(Button)`
  width: 12rem;
  ${({ danger }) => {
    return danger ? `background-color: var(--color-dark-gray);` : `background-color: var(--color-blue);`;
  }}
  margin: 0;
`;

export const Span = styled.div`
  ${({ category }) => {
    if (category) {
      const css = `
        width: 5.8rem;
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
        width: 15rem;
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
