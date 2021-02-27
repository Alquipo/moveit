import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    background: ${theme.colors.backgroundBox};
    color: ${theme.colors.text};
    transition: background-color 0.3s, color 0.3s;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 30px;

    position: absolute;
    left: 0;
    top: 0;

    height: 100vh;
    width: 5rem;
    padding: 2.3rem 2.2rem;

    /* > div button {
      &:not(:first-child) {
        margin-top: 10px;
      }
    } */

    /* button {
      border: 0;
      background: transparent;
      outline-color: ${theme.colors.backgroundLight};

      svg {
        color: ${theme.colors.text};
      }
    } */

    @media (max-width: 800px) {
      flex-direction: row;

      padding: 2rem;
      left: unset;
      right: 0;
      top: 0;

      width: 100%;
      height: 3rem;

      svg {
        width: 2.2rem;
      }
    }
  `}
`
