import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, InfoBtnWapper, Column2, ImgWrapper, Img } from './Info.styled';
import { LinkButton } from '../../styles/button/LinkButton.styled';

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>학습하기 Tutorial</TopLine>
                <Heading>단계별 학습으로 정규표현식과 친해지세요!</Heading>
                <Subtitle>내가 입력하는 정규표현식에 따라 match & skip 학습하기 학습하기 학습하기 학습하기 학습하기 학습하기 학습하기 학습하기 학습하기 학습하기 학습하기 학습하기</Subtitle>
                <InfoBtnWapper>
                  <LinkButton to="/tutorial" primary={true}>
                    학습하기 페이지로
                  </LinkButton>
                </InfoBtnWapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
