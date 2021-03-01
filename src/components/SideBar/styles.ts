import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    height: 100vh;
    width: 5rem;
    padding: 2.3rem 2.2rem;

    background: ${theme.colors.backgroundBox};
    color: ${theme.colors.text};
    transition: background-color 0.3s, color 0.3s;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    @media (max-width: 720px) {
      flex-direction: row;

      padding: 2rem;
      left: unset;
      right: 0;
      top: 0;

      width: 100%;
      height: 3rem;

      svg {
        width: 3rem;
      }
    }
  `}
`
export const WrapperNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 720px) {
    flex-direction: row;
  }
`

interface LinkMenuProps {
  active?: boolean
}
export const LinkMenu = styled.a<LinkMenuProps>`
  cursor: pointer;
  width: 100%;
  margin: 0.25rem 0;
  font-weight: 600;
  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 40px;
    height: 40px;
    fill: ${({ theme, active }) =>
      active ? theme.colors.blue : theme.colors.text};
    transition: all 0.2s;
  }
  position: relative;
  transition: all 0.2s;

  &:after {
    content: '';
    position: absolute;
    width: 5px;
    top: 0;
    left: -19px;
    height: 100%;
    border-radius: 0 10px 10px 0;
    background: ${({ theme, active }) => (active ? theme.colors.blue : 'none')};
    transition: all 0.3s;
  }
  @media (max-width: 720px) {
    margin: 0 1rem;

    &:after {
      left: 0;
      top: 5px;
      width: 100%;
      height: 5px;
      border-radius: 0 0 10px 10px;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    > svg {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }
`

// const iconsCss = css`
//   ${({ theme }) => css`
//     width: 40px;
//     height: 40px;

//     color: ${theme.colors.blue};
//     margin: 1rem;

//     cursor: pointer;
//     transition: all 0.2s;

//     &:hover {
//       opacity: 0.7;
//     }
//   `}
// `

// export const HomeIcon = styled(HomeAlt)`
//   ${iconsCss}

//   &:after {
//     content: '';
//     position: absolute;
//     width: 10px;
//     top: 0;
//     left: -4px;
//     height: 100%;
//     border-radius: 5px;
//     background: ${({ theme }) => theme.colors.blue};
//     transition: all 0.2s;
//   }
//   @media (max-width: 720px) {
//     &:after {
//       left: 0;
//       top: -8px;
//       width: 100%;
//       height: 10px;
//     }
//   }
// `
// export const AwardIcon = styled(Award)`
//   ${iconsCss}
// `
