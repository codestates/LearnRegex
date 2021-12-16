import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: var(--color-black);
  background-color: ${({ whiteBg }) => (whiteBg ? 'var(--color-white)' : 'var(--color-gray)')};

  @media screen and (min-width: 768px) {
    padding: 6.25rem 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 53.75rem;
  width: 100%;
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1.5rem;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? "'col2 col1'" : "'col1 col2'")};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px; //480px
  padding-top: 0;
  padding-bottom: 3.75rem;
`;

export const TopLine = styled.div`
  color: var(--color-blue);
  font-size: 1rem;
  line-height: 1rem;
  font-family: 'IBMPlexSansKR-Bold';
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  margin-left: 0.2rem;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-family: 'IBMPlexSansKR-Bold';
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
  color: var(--color-black);
  opacity: 0.75;
  /* color: ${({ darkText }) => (darkText ? 'var(--color-)' : 'var(--color-)')}; */
`;

export const InfoBtnWapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrapper = styled.div`
  max-width: 500px;
  height: 100%;
  margin-right: 5rem;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;
`;
