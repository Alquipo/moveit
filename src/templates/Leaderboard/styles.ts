import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 720px) {
    flex-direction: column;
  }
  transition: all 0.2s;
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
  > h1 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 2.8rem;
  }
  .ranking {
    flex: 1;
    margin-top: 2.5rem;

    .ranking-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      > strong {
        color: ${({ theme }) => theme.colors.text};
        font-weight: bold;
      }
      > div:first-child {
        font-size: 0.875rem;
        text-transform: uppercase;
        > strong {
          margin-right: 2rem;
        }
      }
      > div:last-child {
        font-size: 0.875rem;
        text-transform: uppercase;

        > strong {
          margin-left: 5rem;
        }
      }
    }
    .ranking-list {
      flex: 1;
    }
  }
`
