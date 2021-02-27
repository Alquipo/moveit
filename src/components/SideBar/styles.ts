import styled, { css } from 'styled-components'
import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt'
import { Award } from '@styled-icons/boxicons-regular/Award'

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
export const WrapperNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: row;
  }
`

const iconsCss = css`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;

    color: ${theme.colors.blue};
    margin: 1rem;

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.7;
    }
  `}
`

export const HomeIcon = styled(HomeAlt)`
  ${iconsCss}
`
export const AwardIcon = styled(Award)`
  ${iconsCss}
`
