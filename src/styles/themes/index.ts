import { DefaultTheme, CustomTheme } from 'styled-components'
import dark from './dark'
import light from './light'

const defaultTheme = {
  font: {
    family: {
      inter: '"Inter", sans-serif',
      rajdhani: '"Rajdhani", sans-serif'
    },
    light: 400,
    normal: 500,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  }
}

function combineTheme(theme: CustomTheme): DefaultTheme {
  return { ...defaultTheme, ...theme }
}

export { combineTheme, dark, light }
