import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    position: relative;
    outline: 0;

    &::before,
    &::after {
      left: 45%;
      opacity: 0;
      position: absolute;
      z-index: -100;
    }

    &:hover::before,
    &:hover::after {
      opacity: 1;
      transform: scale(1) translateY(0);
      z-index: 100;
    }

    &::before {
      border-style: solid;
      border-width: 1em 0.75em 0 0.75em;
      border-color: ${theme.colors.backgroundBox} transparent transparent
        transparent;
      bottom: 100%;
      content: '';
      margin-left: -0.5em;
      transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26),
        opacity 0.65s 0.5s;
      transform: scale(0.6) translateY(-90%);
    }

    &:hover::before {
      transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;
    }

    &::after {
      background: ${theme.colors.backgroundBox};
      border-radius: 0.25em;
      bottom: 117%;
      color: ${theme.colors.text};
      content: attr(data-tip);
      margin-left: -8rem;
      padding: 1em;
      transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;
      transform: scale(0.6) translateY(50%);
      width: 14rem;
    }

    &:hover::after {
      transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);
    }

    @media (max-width: 760px) {
      &::after {
        font-size: 0.75em;
        margin-left: -5em;
        width: 10em;
      }
    }
  `}
`
