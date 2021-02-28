import { createGlobalStyle, css } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 768px) {
      html {
        font-size: 87.5%;
      }
    }

    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
      transition: background-color 0.3s, color 0.3s;

      /* overflow: hidden; */

      ${media.lessThan('medium')`
        overflow-x: hidden;
        overflow-y: auto;
       `}
    }
  }

    body,
    input,
    textarea,
    button {
      font: ${theme.font.normal} ${theme.font.sizes.medium}
        ${theme.font.family.inter};
    }

    button {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  `}

`
export default GlobalStyles
