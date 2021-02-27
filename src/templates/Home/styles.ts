import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.backgroundIndex};
  width: 100%;

  display: flex;

  section {
    width: 100%;
    display: flex;

    align-items: center;

    @media (max-width: 1000px) {
      justify-content: center;
      margin: 0 auto;
    }
  }
`

export const LeftSide = styled.div`
  display: flex;
  width: 100%;

  /* button {
    position: absolute;
    bottom: 0;
    left: 0;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.backgroundBox};
  } */
  @media (max-width: 1100px) {
    display: none;

    /* button {
      left: unset;
      right: 0;
      top: 0;
      bottom: unset;
    } */
  }
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;

    strong {
      margin-top: 7rem;
      font-size: 3rem;
      font-weight: 500;
      color: #ffffff;
    }
  }

  @media (max-width: 1100px) {
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    img {
      width: 25rem;
    }

    div {
      justify-content: center;
      align-items: center;

      strong {
        margin-top: 4rem;
      }
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  margin: 3rem 0;

  svg {
    color: #ffffff;
  }

  span {
    max-width: 300px;
    margin-left: 1rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: #ffffff;
  }

  button {
    outline: none;
    background: transparent;
    border: 0;
  }

  @media (max-width: 1100px) {
    span {
      font-size: 1.3rem;
    }
  }
`

export const LoginContainer = styled.form`
  display: flex;
  align-items: center;

  input {
    border: 0;
    background: linear-gradient(
      100deg,
      ${({ theme }) => theme.colors.inputBackground},
      transparent
    );
    font-size: 1.3rem;
    padding: 1.65rem;

    margin-right: 3px;
    border-radius: 5px;

    color: ${({ theme }) => theme.colors.backgroundBox};

    &::placeholder {
      color: ${({ theme }) => theme.colors.backgroundBox};
      opacity: 0.8;
    }
  }

  /* button {
    padding: 1.3rem;
    font-size: 2rem;
    background: ${({ theme }) => theme.colors.green};
    border: 0;
    color: ${({ theme }) => theme.colors.backgroundBox};
    border-radius: 0 5px 5px 0;
    width: max-content;
  } */

  @media (max-width: 1100px) {
    input {
      width: 78%;
    }
  }
`
type ButtonLoginProps = {
  isSubmit?: boolean
}
export const ButtonLogin = styled.button<ButtonLoginProps>`
  ${({ theme, isSubmit }) => css`
    padding: 1.3rem;
    font-size: 2rem;
    border: 0;
    color: ${theme.colors.backgroundBox};
    border-radius: 0 5px 5px 0;
    width: max-content;
    background: ${theme.colors.inputBackground};

    ${isSubmit &&
    css`
      background: ${theme.colors.green};
    `}
  `}
`
