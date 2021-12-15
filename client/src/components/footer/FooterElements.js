import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: var(--color-gray);
  color: var(--color-blue);
`;

export const FooterWrap = styled.div`
  height: 7rem;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: auto;
`;

export const ContentsWrap = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18rem;
`;

export const SocialIconLink = styled.a`
  font-size: 24px;
  margin-bottom: 14px;
  font-size: 15px;
  text-decoration: none;
`;
