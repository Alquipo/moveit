import styled, { css } from 'styled-components'

export const WrapperCountdown = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: ${theme.font.family.rajdhani};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.title};

    div {
      flex: 1;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      background-color: ${theme.colors.backgroundBox};
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      font-size: 8.5rem;
      text-align: center;

      span {
        flex: 1;
      }

      span:first-child {
        border-right: 1px solid ${theme.colors.background};
      }
      span:last-child {
        border-left: 1px solid ${theme.colors.background};
      }
    }

    & > span {
      font-size: 6.25rem;
      margin: 0 0.5rem;
    }
  `}
`
export const CountdownButton = styled.button`
  ${({ theme }) => css`
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

    font-size: 1.25rem;
    font-weight: ${theme.font.bold};

    transition: background-color 0.2s;

    outline: 0;

    &:hover {
      background-color: ${theme.colors.blueDark};
    }
  `}
`
