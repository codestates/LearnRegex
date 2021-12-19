import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  .content {
    margin: 0 auto;
    padding: 3.5rem 0;
    width: 70rem;

    @media screen and (max-width: 1180px) {
      width: auto;
      margin: 0 2rem;
    }
  }

  .modify {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.7rem;
  }
`;

export const Span = styled.span`
  margin-left: 0.5rem;
  cursor: ${(prop) => prop.cursor};
  font-size: 1.2rem;
  transition: all 0.3s ease 0s;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }

  :hover {
    /* transform: translateY(-1.5px); */
    transform: ${(prop) => (prop.translateY ? `translateY(-1.3px)` : ``)};
  }
`;

export const P = styled.p`
  font-size: ${(prop) => prop.size}rem;
  font-family: IBMPlexSansKR-${(prop) => prop.family};
  text-align: center;
  margin-bottom: ${(prop) => prop.margin}rem;
  cursor: default;
`;
