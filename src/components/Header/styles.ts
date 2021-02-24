import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    height: 60px;
    background: ${theme.colors.backgroundBox};
    color: ${theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    /*
    position: sticky;
    top: 0;
    z-index: 2; */
  `}
`
