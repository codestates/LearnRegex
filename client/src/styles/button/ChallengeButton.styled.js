import styled from 'styled-components';

export const ChallengeButton = styled.button`
  width: 13rem;
  /* height: 100%; */
  height: 4rem;
  border-radius: 1.8rem;
  border: 0.17rem ${({ isClear }) => (isClear ? '' : `solid rgba(63, 63, 63, 0.2);`)};
  background-color: ${({ isClear }) => (isClear ? `var(--color-blue)` : '')};
  color: ${({ isClear }) => (isClear ? `var(--color-white)` : `var(--color-dark-gray)`)};
  font-size: 1.3rem;
  font-family: IBMPlexSansKR-SemiBold;
  transition: all 0.3s ease 0s;
  letter-spacing: 2.5px;

  @media screen and (max-width: 1170px) {
    /* width: 10rem; */
    width: 100%;
  }

  @media screen and (max-width: 940px) {
    /* font-size: 1.2rem; */
  }

  @media screen and (max-width: 768px) {
    width: 13rem;
    margin-top: 1.3rem;
  }

  :hover {
    box-shadow: ${({ isClear }) => (isClear ? '0px 5px 8px rgba(54, 78, 132, 0.5);' : '0px 5px 8px rgba(63, 63, 63, 0.4);')};
    transform: translateY(-3px);
    background-color: ${({ isClear }) => (isClear ? '' : 'rgba(75, 96, 165, 0.8)')};
    border: none;
    color: var(--color-white);
  }
`;
