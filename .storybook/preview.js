import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { ThemeProvider } from 'styled-components'
import { withThemesProvider } from 'themeprovider-storybook'

import { combineTheme, dark, light } from 'styles/themes'

addDecorator(withNextRouter())

const themes = [
  {
    ...dark,
    backgroundColor: '#121214'
  },
  {
    ...light,
    backgroundColor: '#F2F3F5'
  }
]

export const parameters = {
  backgrounds: { disable: true }
}

export const decorators = [
  withThemesProvider(themes, {
    CustomThemeProvider: ThemeProvider
  }),
  (Story) => {
    return (
      <ThemeProvider theme={combineTheme(dark)}>
        <Story />
      </ThemeProvider>
    )
  }
]
