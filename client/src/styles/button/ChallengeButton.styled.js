import styled from 'styled-components';

export const ChallengeButton = styled.button`
  background-color: ${({ isClear }) => (isClear ? 'green' : 'red')};
`;
