import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    height: 60px;
    background: ${theme.colors.backgroundBox};
    color: ${theme.colors.text};
    transition: background-color 0.3s, color 0.3s;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
  `}
`
