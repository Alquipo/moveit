import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Header from '.'

jest.mock('react-switch', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <img data-testid="Mock Switch">{children}</img>
  }
}))

describe('<Header />', () => {
  it('should render the Header correctly', () => {
    const { container } = renderWithTheme(<Header toggleTheme={jest.fn} />)

    expect(screen.queryByRole('button', { name: /Logo/i })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Logo/i })).toHaveAttribute(
      'src',
      `img/logo-full.svg`
    )

    expect(screen.getByTestId('Mock Switch')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
