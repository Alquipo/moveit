import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import { combineTheme, dark } from 'styles/themes'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={combineTheme(dark)}>{children}</ThemeProvider>)
