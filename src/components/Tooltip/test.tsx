import { render, screen } from '@testing-library/react'

import Tooltip from '.'

describe('<Tooltip />', () => {
  it('should render the heading', () => {
    const { container } = render(<Tooltip />)

    expect(screen.getByRole('heading', { name: /Tooltip/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
