import styled from 'styled-components'
import media from 'styled-media-query'

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
`

export const Section = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;

  @media (max-width: 992px) {
    gap: 1rem;
    margin-top: 3rem;
  }

  @media (max-width: 720px) {
    grid-template-columns: auto;
  }
`
export const LeftContainer = styled.div`
  /* ${media.lessThan('medium')`
    width: 100%;
    margin-top: 4rem;

  `} */
`

export const RightContainer = styled.div`
  @media (max-width: 720px) {
    margin-bottom: 1rem;
  }
`
