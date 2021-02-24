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
    /*
    position: sticky;
    top: 0;
    z-index: 2; */
  `}
`
