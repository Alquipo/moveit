import styled, { css } from 'styled-components'

export const WrapperCountdown = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: ${theme.font.family.rajdhani};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.title};
    transition: color 0.3s;

    div {
      flex: 1;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      background-color: ${theme.colors.backgroundBox};
      box-shadow: ${theme.boxShadow};

      transition: background-color 0.3s, box-shadow 0.3s;

      border-radius: 5px;
      font-size: 8.5rem;
      text-align: center;

      span {
        flex: 1;
      }

      span:first-child {
        border-right: 1px solid ${theme.colors.background};
        transition: border-right 0.3s;
      }
      span:last-child {
        border-left: 1px solid ${theme.colors.background};
        transition: border-left 0.3s;
      }
    }

    & > span {
      font-size: 6.25rem;
      margin: 0 0.5rem;
    }
  `}
`

type ButtonProps = {
  isActive?: boolean
}

export const CountdownButton = styled.button<ButtonProps>`
  ${({ theme, isActive }) => css`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background-color: ${theme.colors.blue};
    color: ${theme.colors.backgroundBox};

    transition: background-color 0.3s, color 0.3s;

    font-size: 1.25rem;
    font-weight: ${theme.font.bold};

    outline-color: ${theme.colors.blue};

    svg {
      width: 2rem;
      height: 2rem;
      margin-left: 0.7rem;
    }

    &:not(:disabled):hover {
      background-color: ${theme.colors.blueDark};
      transition: background-color 0.3s;
    }

    &:disabled {
      background-color: ${theme.colors.backgroundBox};
      color: ${theme.colors.text};
      transition: background-color 0.3s, color 0.3s;

      cursor: not-allowed;

      border-bottom: 4px solid ${theme.colors.green};

      svg {
        color: ${theme.colors.green};
        transition: color 0.3s;
      }
    }

    ${isActive &&
    css`
      background-color: ${theme.colors.backgroundBox};
      color: ${theme.colors.text};
      outline-color: ${theme.colors.backgroundBox};

      transition: background-color 0.3s, color 0.3s;

      position: relative;
      border-bottom: 4px solid ${theme.colors.backgroundBox};

      @keyframes roundtime {
        to {
          transform: scaleX(1);
        }
      }

      &:before {
        content: '';
        width: 100%;
        transform: scaleX(0);
        display: block;
        margin: 0;
        position: absolute;
        height: 5px;
        background: ${theme.colors.green};
        bottom: -5px;
        left: 0;
        border-radius: 0 0 5px 5px;
        animation: roundtime calc(3 * 1s) linear forwards;
        transform-origin: left center;
      }

      /* &:not(:disabled):hover {
          background: var(--red);
          color: var(--white);
          border-color: var(--red);
          &:before {
            background: var(--red);
          }
        } */

      &:not(:disabled):hover {
        background-color: ${theme.colors.red};
        color: ${theme.colors.backgroundBox};
        outline-color: ${theme.colors.red};

        transition: background-color 0.3s, color 0.3s, outline-color 0.3s;
      }
    `}
  `}
`
