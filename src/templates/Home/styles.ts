import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`

export const Section = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;

  ${media.lessThan('medium')`
    display: flex;
    width: 100%;

    flex-direction: column;
    justify-content: center;
    align-items: center;

  `}
`
export const LeftContainer = styled.div`
  ${media.lessThan('medium')`
    width: 100%;
    margin-top: 4rem;

  `}
`

export const RightContainer = styled.div`
  ${media.lessThan('medium')`

    margin-bottom: 3rem;
    margin-top: 3rem;
  `}
`
