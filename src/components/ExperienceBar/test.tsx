import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExperienceBar from '.'

describe('<ExperienceBar />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<ExperienceBar />)

    expect(screen.getByText('0 xp')).toBeInTheDocument()
    expect(screen.getByText('300 xp')).toBeInTheDocument()
    expect(screen.getByText('600 xp')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
