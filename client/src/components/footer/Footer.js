import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FooterContainer, FooterWrap, ContentsWrap, FooterInnerWrap, RepoWikiWrap, Logo, RepoWiki, WebsiteRights, GithubLinkWrap, GithubIcon, GithubLink } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <ContentsWrap>
          <FooterInnerWrap>
            <RepoWikiWrap>
              <Logo>LearnRegex&nbsp;</Logo>
              <RepoWiki href="https://github.com/codestates/LearnRegex" target="_blank">
                &nbsp;Repository&nbsp;
              </RepoWiki>
              <RepoWiki href="https://github.com/codestates/LearnRegex/wiki" target="_blank">
                &nbsp;Wiki&nbsp;
              </RepoWiki>
            </RepoWikiWrap>
            <WebsiteRights>LearnRegex © 2021 All rights reserved.</WebsiteRights>
            <GithubLinkWrap>
              <GithubLink href="https://github.com/shleecloud" target="_blank" aria-label="Github">
                <GithubIcon />
                &nbsp;이승훈
              </GithubLink>
              <GithubLink href="https://github.com/yunjink" target="_blank" aria-label="Github">
                <GithubIcon>
                  <FaGithub />
                </GithubIcon>
                &nbsp;김연진
              </GithubLink>
              <GithubLink href="https://github.com/EUNYUSEO" target="_blank" aria-label="Github">
                <GithubIcon>
                  <FaGithub />
                </GithubIcon>
                &nbsp;서은유
              </GithubLink>
              <GithubLink href="https://github.com/hyucki" target="_blank" aria-label="Github">
                <GithubIcon>
                  <FaGithub />
                </GithubIcon>
                &nbsp;박진혁
              </GithubLink>
            </GithubLinkWrap>
          </FooterInnerWrap>
        </ContentsWrap>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

//
