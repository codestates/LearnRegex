import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0 1.8rem;

  img {
    width: 25%;
    margin: 1.7rem;
  }

  h2 {
    font-family: IBMPlexSansKR-Bold;
    margin-bottom: 1.2rem;
  }

  p {
    margin: 0.2rem 0;
  }

  span {
    font-weight: bold;
    color: var(--color-blue);
  }
`;

const EmailCert = () => {
  return (
    <>
      <Container>
        <img src="/assets/email.png" alt="email.png" />
        <h2>인증 메일 발송 완료</h2>
        <p>메일함에서 인증 메일을 확인 바랍니다.</p>
        <p>
          이메일의 <span>인증 버튼</span>을 클릭하여 인증을 진행해주세요.
        </p>
      </Container>
    </>
  );
};

export default EmailCert;
