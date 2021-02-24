import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 3.5rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #d7d8da;

    font-weight: 500;

    color: ${theme.colors.text};

    span:first-child {
      font-size: 1.25rem;
    }

    span:last-child {
      font-size: 1.5rem;
    }
  `}
`
