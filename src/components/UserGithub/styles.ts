import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 4px 0;
  .position {
    padding: 2rem;
    height: 100%;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;

    background: ${({ theme }) => theme.colors.backgroundBox};
    margin-right: 4px;

    > h1 {
      font-size: 1.5rem;
    }
  }
  .info {
    padding: 1rem;
    background: ${({ theme }) => theme.colors.backgroundBox};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    > div {
      display: flex;
      align-items: center;
      > img {
        width: 4rem;
        height: 4rem;
        margin-right: 1rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.grayLine};
      }
      .profile {
        display: flex;
        flex-direction: column;

        > strong {
          color: ${({ theme }) => theme.colors.title};
          font-size: 1.25rem;
        }

        margin-right: 10rem;
        > p {
          > img {
            margin-right: 6px;
          }
        }
      }
    }
    > p {
      color: ${({ theme }) => theme.colors.text};
      > strong {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`
