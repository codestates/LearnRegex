import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
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

  .box {
    /* border: 1px solid; */
    box-shadow: 0px 5px 8px rgba(171, 180, 221, 0.4);
    width: 30rem;
    height: 26rem;
    margin: 0 1rem;

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
    }
  }
`;

export const Button = styled.button`
  width: 12rem;
  height: 40px;
  font-size: 1.1rem;
  border-radius: 1rem;
  ${({ danger }) => {
    return danger ? `background-color: var(--color-light-gray);` : `background-color: var(--color-blue);`;
  }}

  color: white;

  transition: all 0.3s ease 0s;
  letter-spacing: 2.5px;
  :hover {
    box-shadow: 0px 5px 8px rgba(171, 180, 221, 0.4);
    transform: translateY(-2px);
  }
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
