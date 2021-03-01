import { render, screen } from '@testing-library/react'

import Leaderboard from '.'

describe('<Leaderboard />', () => {
  it('should render the heading', () => {
    const { container } = render(<Leaderboard />)

    expect(screen.getByRole('heading', { name: /Leaderboard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
