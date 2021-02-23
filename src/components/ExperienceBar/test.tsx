import { render, screen } from '@testing-library/react'

import ExperienceBar from '.'

describe('<ExperienceBar />', () => {
  it('should render the heading', () => {
    const { container } = render(<ExperienceBar />)

    expect(screen.getByRole('heading', { name: /ExperienceBar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
