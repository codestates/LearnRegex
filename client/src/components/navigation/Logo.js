import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../image/LearnRegex-logo.png';

export const LogoImage = styled.img`
  width: 12px;
  height: 24px;

  &:focus {
    outline: 0;
  }
`;

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src="{logo}" alt="" />
      </Link>
    </div>
  );
}

export default Logo;
