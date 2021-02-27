import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.backgroundIndex};
  /* margin: 0 auto; */
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  section {
    max-width: 992px;
    margin: 0 auto;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }
`

export const LeftSide = styled.div`
  position: relative;
  button {
    position: absolute;
    bottom: 0;
    left: 0;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
  }
`

export const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: column;
    strong {
      margin-top: 8rem;
      font-size: 3rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  margin: 3rem 0;
  svg {
    color: ${({ theme }) => theme.colors.white};
  }
  span {
    max-width: 300px;
    margin-left: 1rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
  }
`

export const LoginContainer = styled.form`
  display: flex;
  align-items: center;
  input {
    border: 0;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.inputBackground},
      transparent
    );
    font-size: 1.3rem;
    padding: 1.65rem;
    margin-right: 5px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
    &::placeholder {
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.5;
    }
  }
  button {
    padding: 1rem;
    font-size: 2rem;
    background: ${({ theme }) => theme.colors.green};
    border: 0;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    width: max-content;
  }
`
