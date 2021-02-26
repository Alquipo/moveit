import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.backgroundOverlay};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundBox};
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: ${theme.boxShadow};
    text-align: center;
    position: relative;

    header {
      font-size: 8.78rem;
      font-weight: 600;
      color: ${theme.colors.blue};
      background: url('/icons/levelup.svg') no-repeat center;
      background-size: contain;
    }

    strong {
      font-size: 2.25rem;
      color: ${theme.colors.title};
    }

    p {
      font-size: 1.25rem;
      color: ${theme.colors.text};
      margin-top: 0.25rem;
    }

    button {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      background: transparent;
      border: 0;
      font-size: 0;
      outline-color: ${theme.colors.backgroundBox};
    }
  `}
`
