import styled, { css } from 'styled-components'
import { darken } from 'polished'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;

    background-color: ${theme.colors.backgroundBox};
    border-radius: 5px;
    box-shadow: ${theme.boxShadow};

    transition: background-color 0.3s, box-shadow 0.3s;

    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    ${media.lessThan('medium')`
    margin-bottom: 4rem;

  `}
  `}
`
export const ChallengeActive = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;

    header {
      color: ${theme.colors.blue};
      transition: color 0.3s;

      font-weight: 600;
      font-size: 1.25rem;
      padding: 0 2rem 1.5rem;
      border-bottom: 1px solid ${theme.colors.grayLine};
    }

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      strong {
        font-size: 2rem;
        font-weight: 600;
        color: ${theme.colors.title};
        transition: color 0.3s;

        margin: 1.5rem 0 1rem;
      }

      p {
        line-height: 1.5;
      }
    }

    footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  `}
`

type ChallengeButtonProps = {
  failed?: boolean
  succeeded?: boolean
}
export const ChallengeButton = styled.button<ChallengeButtonProps>`
  ${({ theme, failed, succeeded }) => css`
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    color: ${theme.colors.backgroundBox};
    transition: color 0.3s;

    font-size: 1rem;
    font-weight: 600;

    outline: 0;

    ${failed &&
    css`
      background-color: ${theme.colors.red};
      transition: background-color 0.3s;

      &:hover {
        background-color: ${darken(0.05, theme.colors.red)};
      }
    `}

    ${succeeded &&
    css`
      background-color: ${theme.colors.green};
      transition: background-color 0.3s;

      &:hover {
        background-color: ${darken(0.1, theme.colors.green)};
      }
    `}
  `}
`

export const ChallengeNotActive = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.colors.text};

    strong {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.4;
    }

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.4;
      margin-top: 3rem;

      img {
        margin-bottom: 1rem;
      }
    }
  `}
`
