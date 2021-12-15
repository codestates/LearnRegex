import styled from 'styled-components';

export const ChallengeButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 1.8rem;
  border: 0.17rem ${({ isClear }) => (isClear ? '' : `solid rgba(63, 63, 63, 0.2);`)};
  background-color: ${({ isClear }) => (isClear ? `var(--color-blue)` : '')};
  color: ${({ isClear }) => (isClear ? `var(--color-white)` : `var(--color-dark-gray)`)};
  font-size: 1.3rem;
  font-family: IBMPlexSansKR-SemiBold;
  transition: all 0.3s ease 0s;
  letter-spacing: 2.5px;

  :hover {
    box-shadow: ${({ isClear }) => (isClear ? '0px 5px 8px rgba(54, 78, 132, 0.5);' : '0px 5px 8px rgba(63, 63, 63, 0.4);')};
    transform: translateY(-3px);
    background-color: ${({ isClear }) => (isClear ? '' : 'rgba(75, 96, 165, 0.8)')};
    border: none;
    color: var(--color-white);
  }
`;
