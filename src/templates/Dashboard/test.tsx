import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

jest.mock('components/ExperienceBar', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ExperienceBar" />
  }
}))

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home />)

    expect(screen.getByTestId('Mock ExperienceBar')).toBeInTheDocument()
  })
})
