import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown from './Dropdown';

//! Styled ----------------------------------------------------------------

export const Navbar = styled.div`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const Logo = styled.img`
  width: 50%;
`;

export const SignInButton = styled.button`
  padding: 8px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  //background-color: black;
`;

//! ------------------------------------------------------------------------

function Navigation() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <Navbar>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <Logo img src="" alt="" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/tutorial" className="nav-links" onClick={closeMobileMenu}>
              학습하기
            </Link>
          </li>
          <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to="/quiz" className="nav-links" onClick={closeMobileMenu}>
              퀴즈 <i className="fas fa-caret-down" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cheatsheet" className="nav-links" onClick={closeMobileMenu}>
              자습서
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-links" onClick={closeMobileMenu}>
              <SignInButton />
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
      </Navbar>
    </>
  );
}

export default Navigation;
