import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    const { container } = render(<Header />)

    expect(screen.getByRole('heading', { name: /Header/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
