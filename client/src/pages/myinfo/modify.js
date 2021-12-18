import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestGetMyInfo } from '../../lib/requestUserInfo';
import dotenv from 'dotenv';
import { EditMyInfo } from './EditMyInfo';
import { EditMyPassword } from './EditMyPassword';
import { checkUserIsLogin } from '../../lib/checkIsLogin';
import { Container, Content, ContentWrap, ButtonElement, InfoContainer, SpanElement } from './modify.styled';
import { NewButton } from '../../styles/EditMyInfo.styled';
dotenv.config();

const MyInfo = () => {
  if (!checkUserIsLogin()) window.location.replace('/');
  const dispatch = useDispatch();
  const [Pages, setPages] = useState('');
  const [myInfo, setMyInfo] = useState({
    email: '',
    nickname: '',
    makeQuiz: 0,
    clearQuiz: 0,
    socialType: '',
  });
  useEffect(() => {
    const getMyInfo = async () => {
      const resultMyInfo = await requestGetMyInfo();
      if (resultMyInfo) setMyInfo(resultMyInfo.data.data);
    };
    getMyInfo();
  }, []);

  const handleEditMyInfo = () => {
    setPages('EditMyInfo');
  };

  const handleEditMyPassword = () => {
    setPages('EditMyPassword');
  };

  const handleDeleteMyInfo = () => {
    dispatch(setModal('deleteUserConfirm'));
  };

  const PrintModifyPages = () => {
    if (Pages === 'EditMyInfo') return <EditMyInfo myInfo={myInfo} />;
    else if (Pages === 'EditMyPassword') return <EditMyPassword />;
    else return <Modify />;
  };

  const Modify = () => {
    return (
      <>
        <Container>
          <ContentWrap>
            <Content padding>
              <InfoContainer>
                <SpanElement category backcolor={'light-blue'} color={'white'} category size={1.1} family={'Medium'}>
                  이메일
                </SpanElement>
                <SpanElement>{myInfo.socialType === 'local' ? myInfo.email : myInfo.socialType + ' 로그인'}</SpanElement>
              </InfoContainer>
              <InfoContainer>
                <SpanElement category backcolor={'light-blue'} color={'white'} category size={1.1} family={'Medium'}>
                  닉네임
                </SpanElement>
                <SpanElement>{myInfo.nickname}</SpanElement>
              </InfoContainer>
              <NewButton editInfo onClick={handleEditMyInfo}>
                프로필 수정
              </NewButton>
            </Content>
            <Content>
              <ButtonElement>{myInfo.socialType === 'local' ? <NewButton onClick={handleEditMyPassword}>비밀번호 수정</NewButton> : <SpanElement>비밀번호 수정 불가능</SpanElement>}</ButtonElement>
              <hr />
              <ButtonElement>
                <NewButton danger onClick={handleDeleteMyInfo}>
                  회원 탈퇴
                </NewButton>
              </ButtonElement>
            </Content>
          </ContentWrap>
        </Container>
      </>
    );
  };

  return (
    <>
      <PrintModifyPages />
    </>
  );
};

export default MyInfo;
