import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`
export const PositionWrapper = styled.div`
  padding: 35px;
  height: 100%;
  width: 5rem;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.backgroundBox};
  transition: background-color 0.3s;

  margin-right: 4px;

  @media (max-width: 1080px) {
    padding: 32px;
  }

  @media (max-width: 768px) {
    padding: 29px;
  }

  > h1 {
    font-size: 22px;
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
`
export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  > img {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.grayLine};
  }

  div {
    display: flex;
    flex-direction: column;
    /* width: 18rem; */

    > strong {
      color: ${({ theme }) => theme.colors.title};
      transition: color 0.3s;

      font-size: 1.25rem;
    }

    > p {
      > img {
        margin-right: 6px;
      }
    }
  }
`

export const ExpWrapper = styled.div`
  width: 38%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: center;

  p:first-child {
    /* margin-left: 6.5rem; */
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;

    strong {
      color: ${({ theme }) => theme.colors.blue};
      transition: color 0.3s;
    }
  }
`
