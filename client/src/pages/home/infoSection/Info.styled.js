import styled, { keyframes, css } from 'styled-components';

export const InfoContainer = styled.div`
  width: 100%;
  color: var(--color-black);
  background-color: ${({ whiteBg }) => (whiteBg ? 'var(--color-white)' : 'var(--color-gray)')};

  @media screen and (min-width: 768px) {
    padding: 6.25rem 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 50rem;
  width: 100%;
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 10rem;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? "'col2 col1'" : "'col1 col2'")};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    margin-top: 3rem;
  }
`;

export const Column1 = styled.div`
  /* margin-bottom: 1rem; */
  padding: 0;
  grid-area: col1;
`;

export const Column2 = styled.div`
  /* margin-bottom: 1rem; */
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 585px; // media-query large: 1170px / 2
  padding-top: 0;
  padding-bottom: 3.75rem;
  margin-left: 1.5rem;
  /* margin-right: 2.5rem; */
`;

export const TopLine = styled.div`
  color: var(--color-blue);
  font-size: 1rem;
  line-height: 1rem;
  font-family: 'IBMPlexSansKR-Bold';
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  /* margin-left: 0.2rem; */
`;

export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  line-height: 1.1;
  font-family: 'IBMPlexSansKR-Bold';
  word-break: keep-all;
  color: var(--color-black);
  /* color: ${({ lightText }) => (lightText ? 'var(--color-)' : 'var(--color-)')}; */
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.2rem;
  line-height: 24px;
  word-break: keep-all;
  color: var(--color-black);
  opacity: 0.75;
  /* color: ${({ darkText }) => (darkText ? 'var(--color-)' : 'var(--color-)')}; */
`;

export const InfoBtnWapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const upTransform = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 100px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export const ImgWrapper = styled.div`
  max-width: 585px; // media-query large: 1170px / 2
  height: 100%;
  margin-right: 3rem;
  opacity: 0;

  ${({ whiteBg }) =>
    whiteBg
      ? null
      : css`
          position: relative;
          top: -40px;
        `}

  ${({ scrollY, whiteBg }) =>
    whiteBg
      ? scrollY > 558 &&
        css`
          animation: ${upTransform} 2s;
          animation-fill-mode: forwards;
          transition: all 1s linear;
        `
      : scrollY > 1520 &&
        css`
          animation: ${upTransform} 2s;
          animation-fill-mode: forwards;
          transition: all 1s linear;
        `}

  @media screen and (max-width: 768px) {
    margin-bottom: 10rem;
    ${({ whiteBg }) =>
      whiteBg
        ? null
        : css`
            top: 0;
          `}
  }
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 1rem;
  padding-right: 0;
`;
