import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem 2.5rem 2.5rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    margin-left: 5rem;
    padding: 2rem;
  }
  @media (max-width: 800px) {
    padding: 2rem;
    margin-left: 0;
  }
`

export const Section = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;

  @media (max-width: 992px) {
    gap: 1.25rem;
    margin-top: 2rem;
  }

  @media (max-width: 1100px) {
    margin-top: 3.5rem;
    grid-template-columns: auto;
  }

  @media (max-width: 542px) {
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
  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }
`
