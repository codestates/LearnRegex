import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FooterContainer, FooterWrap, ContentsWrap, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <ContentsWrap>
          <SocialMediaWrap>
            <SocialLogo to="/">LearnRegex</SocialLogo>
            <WebsiteRights>LearnRegex © 2021 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
                이승훈
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
                김연진
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
                서은유
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
                박진혁
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </ContentsWrap>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
