// import {  screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import Countdown from '.'

describe('<Countdown />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Countdown />)

    // expect(
    //   screen.getByRole('heading', { name: /Countdown/i })
    // ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
