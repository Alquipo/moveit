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
    transition: color 0.3s;
    font-size: 2.8rem;
  }
`
export const Ranking = styled.div`
  flex: 1;
  margin-top: 2.5rem;

  > div {
    flex: 1;
  }
`
export const RankingTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  div {
    font-size: 1rem;
    text-transform: uppercase;
  }

  div:first-child {
    strong {
      margin-right: 2rem;
    }

    strong:first-child {
      margin-left: 0.2rem;
    }
  }
  div:last-child {
    strong {
      margin-left: 6rem;
    }

    strong:last-child {
      margin-right: 1rem;
    }
  }
`
