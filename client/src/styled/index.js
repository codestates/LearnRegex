import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  :after,
  :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: var(--fontSize-root--big);
    font-family: var(--fontFamily);
    color: var(--color-black);
    background-color: var(--color-white);

    ${media.lessThan('medium')`
      font-size: var(--fontSize-root--small);
    `}

    * {
      /* 스크롤 바 제거 */
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
    }
  }

    button, input, textarea {
    padding: 0;
    border: none;
    outline: none;
    background-color: inherit;
    }

    button {
      cursor: pointer;
      :active,
      :hover,
      :focus {
        outline: none;
      }
    }

    a {
      color: inherit;
      text-decoration: none;
      outline: none;
    }

    ul {
      padding: 0;
      list-style: none;
    }
  
  
  // * ------------ font ------------
  @font-face {
    font-family: 'D2Coding';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'IBMPlexSansKR-ExtraLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-ExtraLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
      font-family: 'IBMPlexSansKR-Light';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Light.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'IBMPlexSansKR-Medium';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Medium.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'IBMPlexSansKR-SemiBold';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-SemiBold.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'IBMPlexSansKR-Bold';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Bold.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'IBMPlexSansKR-Text';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Text.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  // * ------------ font ------------

  :root {
    --fontFamily: IBMPlexSansKR-Text, system-ui;
    --fontSize-root--big: 16px;
    --fontSize-root--small: 14px;
    --color-black: #3F3F44;
    --color-white: #FDFDFD;
    --color-gray: #E6E6E6;
    --color-light-gray: #A8AABC;
    --color-blue: #4B60A5;
    --color-light-blue: #ABB4DD;
    --color-dark-blue: #364E84;
    --color-green: #5C9592;
    --color-dark-green: #2F5B5B;
    --color-brown: #89716F;
    --color-light-brown: #E3D6D6;
    --color-red: #A24550;
    --color-pink: #DD7981;
    --color-light-pink: #FFE4E5;
    --color-yellow: #F7D823;
    --color-light-yellow: #EEE8A9;
    --color-dark-yellow: #CCC153;
    --color-shadow: #444655;
  }

`;

export default GlobalStyle;
