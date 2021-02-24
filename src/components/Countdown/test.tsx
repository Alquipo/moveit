import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import Countdown from '.'

describe('<Countdown />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Countdown />)

    expect(screen.getByText(/2/i)).toBeInTheDocument()
    expect(screen.getByText(/5/i)).toBeInTheDocument()
    expect(screen.getAllByText(/0/i)).toHaveLength(2)

    expect(
      screen.getByRole('button', { name: /iniciar um ciclo/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  jest.useFakeTimers()
  it('should call counter press button', () => {
    renderWithTheme(<Countdown />)

    fireEvent.click(screen.getByRole('button'))

    expect(setTimeout).toHaveBeenCalledTimes(2)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
  })
})
