import React from 'react';
import { LinkButton } from '../../styles/button/LinkButton.styled';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, InfoBtnWapper, Column2, ImgWrapper, Img } from './Info.styled';

const InfoSection = ({ id, whiteBg, topLine, heading, description, buttonLabel, imgStart, img, alt }) => {
  return (
    <>
      <InfoContainer id={id} whiteBg={whiteBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{heading}</Heading>
                <Subtitle>{description}</Subtitle>
                <InfoBtnWapper>
                  <LinkButton to="/tutorial" primary={true}>
                    {buttonLabel}
                  </LinkButton>
                </InfoBtnWapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
