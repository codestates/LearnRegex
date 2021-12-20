import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { VscCircleFilled } from 'react-icons/vsc';

export const FooterContainer = styled.footer`
  background-color: var(--color-gray);
  color: var(--color-blue);
  min-height: 6.5rem;
  display: flex;
  position: relative;
`;

export const FooterWrap = styled.div`
  /* height: 7rem; */
  width: 100%;
  height: 100%;
  padding: 1.2rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1170px;
  margin: auto;
`;

export const ContentsWrap = styled.section`
  max-width: 1170px;
  width: 100%;
`;

export const FooterInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1170px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RepoWikiWrap = styled.div`
  justify-self: start;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.3rem;
`;

export const CircleIcon = styled(VscCircleFilled)`
  font-size: 1rem;
`;

export const Logo = styled.div`
  cursor: unset;
}
`;

export const RepoWiki = styled.a`
  cursor: pointer;

  :hover {
    background-color: rgba(051, 102, 153, 0.1);
    border-radius: 10px;
  }
`;

export const WebsiteRights = styled.small`
  margin-bottom: 1rem;
`;

export const GithubLinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18rem;
`;

export const GithubLink = styled.a`
  font-size: 24px;
  margin-bottom: 14px;
  font-size: 15px;
  text-decoration: none;
  height: 100%;
`;

export const GithubIcon = styled(FaGithub)`
  font-size: 1rem;
`;
