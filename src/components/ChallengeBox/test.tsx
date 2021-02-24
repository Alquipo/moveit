import { render, screen } from '@testing-library/react'

import ChallengeBox from '.'

describe('<ChallengeBox />', () => {
  it('should render the heading', () => {
    const { container } = render(<ChallengeBox />)

    expect(
      screen.getByRole('heading', { name: /ChallengeBox/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
