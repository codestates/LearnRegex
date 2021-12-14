import styled from 'styled-components';
import { Button } from '../../styled/button/CommonButton.styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 0 2rem;
`;

export const Header = styled.div`
  width: 100%;
  margin: 1.7rem 0;
`;

export const Img = styled.img.attrs({})`
  width: ${({ logo }) => (logo ? '60%' : '100%')};
  ${({ btn }) => (btn ? `cursor: pointer` : null)};
`;

export const InputBox = styled.div`
  width: 100%;
  height: 4rem;
  text-align: left;
  margin: 0.1rem 0;

  span {
    color: var(--color-red);
    opacity: 0.8;
    font-size: 0.9rem;
  }
`;

export const Input = styled.input.attrs({})`
  width: 100%;
  height: 2.5rem;
  background-color: var(--color-gray);
  border-radius: 7px;
  opacity: 0.7;
  padding: 0 0.6rem 0 0.6rem;
`;

export const NewButton = styled(Button)`
  width: 50%;
  margin: 0.9rem 0;
`;

export const OauthBox = styled.div`
  display: flex;
  justify-content: center;

  .icon {
    width: 2.8rem;
    margin: 2rem 1.7rem 0.4rem 1.7rem;
    transition: all 0.3s ease 0s;

    :hover {
      transform: translateY(-2px);
    }
  }
`;

export const Bottom = styled.div`
  padding: 1.2rem 0;

  span {
    padding: 0 0.8rem;
  }
`;

export const Span = styled.span`
  cursor: pointer;

  :hover {
    color: var(--color-blue);
    text-decoration: underline;
  }
`;
