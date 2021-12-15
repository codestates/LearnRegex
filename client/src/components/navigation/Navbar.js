import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setModal } from '../../modules/modal';
import { clearSession } from '../../lib/clearSession';
import { requestSignOut } from '../../lib/requestUserInfo';
import { checkUserIsLogin, checkUserNickname } from '../../lib/checkIsLogin';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/logo.png';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnWrap, NavSignInBtn, SubNavigation } from './NavbarElements';

const Navbar = ({ handleSidebar }) => {
  const dispatch = useDispatch();
  const isLogin = checkUserIsLogin();
  const navigate = useNavigate();
  const nickname = checkUserNickname();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubNavi = (boolean) => {
    if (boolean) setIsOpen(boolean);
    else setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    const serverResult = await requestSignOut();
    if (serverResult) {
      navigate('/');
      setIsOpen(false);
    }
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo src={logo} type="image/png" />
          <MobileIcon onClick={() => handleSidebar(true)}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/tutorial">학습하기</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/quizlist" onClick={() => clearSession()}>
                퀴즈
              </NavLinks>
            </NavItem>
            <NavBtnWrap>
              {isLogin ? <NavSignInBtn onClick={() => handleSubNavi()}>{nickname}</NavSignInBtn> : <NavSignInBtn onClick={() => dispatch(setModal('signIn'))}>로그인</NavSignInBtn>}
              {isOpen ? (
                <SubNavigation>
                  <Link to="/myinfo" onClick={() => handleSubNavi(false)}>
                    내 정보
                  </Link>
                  <div onClick={handleSignOut}>로그아웃</div>
                </SubNavigation>
              ) : null}
            </NavBtnWrap>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
