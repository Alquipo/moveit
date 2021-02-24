import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CompletedChallenges from '.'

describe('<CompletedChallenges />', () => {
  it('should render the CompletedChallenges correctly', () => {
    const { container } = renderWithTheme(<CompletedChallenges />)

    expect(screen.getByText(/Desafios completos/i)).toBeInTheDocument()

    expect(screen.getByText(/5/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
