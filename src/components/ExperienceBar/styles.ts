import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }
`
export const ExperienceBar = styled.div`
  ${({ theme }) => css`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background-color: ${theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;
  `}
`
export const ExperienceBarProgress = styled.div`
  ${({ theme }) => css`
    height: 4px;
    border-radius: 4px;
    background-color: ${theme.colors.green};
  `}
`

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`
