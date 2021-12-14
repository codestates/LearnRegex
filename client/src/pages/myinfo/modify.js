import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../modules/modal';
import { requestGetMyInfo } from '../../lib/requestUserInfo';
import dotenv from 'dotenv';
import { EditMyInfo } from './EditMyInfo';
import { EditMyPassword } from './EditMyPassword';
import { checkUserIsLogin } from '../../lib/checkIsLogin';
import { Container, Button, Span } from './modify.styled';
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
          <div className="box">
            <div className="contentBox">
              <div className="content">
                <Span category>
                  <span>이메일</span>
                </Span>
                <Span>
                  <span>{myInfo.socialType === 'local' ? myInfo.email : 'Login as ' + myInfo.socialType}</span>
                </Span>
              </div>
              <div className="content">
                <Span category>
                  <span>닉네임</span>
                </Span>
                <Span>
                  <span>{myInfo.nickname}</span>
                </Span>
              </div>
            </div>
            <div className="buttonBox">
              <Button onClick={handleEditMyInfo}>프로필 수정</Button>
            </div>
          </div>
          <div className="box">
            <div className="buttonBox">{myInfo.socialType === 'local' ? <Button onClick={handleEditMyPassword}>비밀번호 수정</Button> : <p>비밀번호 수정 불가능</p>}</div>
            <hr />
            <div className="buttonBox">
              <Button danger onClick={handleDeleteMyInfo}>
                회원 탈퇴
              </Button>
            </div>
          </div>
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
