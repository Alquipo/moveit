import { render, screen } from '@testing-library/react'

import LeaderboardTemplate from '.'

describe('<Leaderboard />', () => {
  it('should render the heading', () => {
    const { container } = render(<LeaderboardTemplate />)

    expect(
      screen.getByRole('heading', { name: /Leaderboard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
