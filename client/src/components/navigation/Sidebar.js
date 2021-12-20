import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setModal } from '../../modules/modal';
import { clearSession } from '../../lib/clearSession';
import { requestSignOut } from '../../lib/requestUserInfo';
import { checkUserIsLogin, checkUserNickname } from '../../lib/checkIsLogin';
import { SidebarContainer, Icon, CloseIcon, SidebarWrap, SidebarLink, SidebarBtn, SidebarDevider, SidebarSignOut } from './Sidebar.styled';

const Sidebar = ({ openSidebar, handleSidebar }) => {
  const dispatch = useDispatch();
  const isLogin = checkUserIsLogin();
  const navigate = useNavigate();
  const nickname = checkUserNickname();
  const handleSignOut = async () => {
    const serverResult = await requestSignOut();
    if (serverResult) {
      navigate('/');
    }
  };

  return (
    <SidebarContainer openSidebar={openSidebar}>
      <Icon>
        <CloseIcon onClick={() => handleSidebar(false)} />
      </Icon>
      <SidebarWrap isLogin={isLogin} onClick={() => handleSidebar(false)}>
        {isLogin ? <SidebarBtn onClick={() => (window.location.href = '/myinfo')}>{nickname}</SidebarBtn> : <SidebarBtn onClick={() => dispatch(setModal('signIn'))}>로그인</SidebarBtn>}
        <SidebarLink to="/tutorial">학습하기</SidebarLink>
        <SidebarLink to="/quizlist" onClick={() => clearSession()}>
          퀴즈
        </SidebarLink>
        {isLogin ? (
          <>
            <SidebarDevider />
            <SidebarLink to="/myinfo">내 정보</SidebarLink>
            <SidebarSignOut onClick={handleSignOut}>로그아웃</SidebarSignOut>
          </>
        ) : (
          <></>
        )}
      </SidebarWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
