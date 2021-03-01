import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`
export const PositionWrapper = styled.div`
  padding: 2.1rem;
  height: 100%;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  background: ${({ theme }) => theme.colors.backgroundBox};
  transition: background-color 0.3s;

  margin-right: 4px;

  > h1 {
    font-size: 1.5rem;
  }
`

export const InfoWrapper = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.backgroundBox};
  transition: background-color 0.3s;

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
  }

  > p {
    color: ${({ theme }) => theme.colors.text};
    /* margin-left: 20px; */

    > strong {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 18rem; */

  > strong {
    color: ${({ theme }) => theme.colors.title};
    font-size: 1.25rem;
  }

  > p {
    > img {
      margin-right: 6px;
    }
  }
`
