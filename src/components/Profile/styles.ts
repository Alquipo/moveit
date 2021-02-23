import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    align-items: center;

    div {
      margin-left: 1.5rem;

      strong {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${theme.colors.title};
      }

      p {
        font-size: 1rem;
        margin-top: 0.5rem;

        img {
          margin-right: 0.5rem;
        }
      }
    }
  `}
`
export const ProfileImage = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`
