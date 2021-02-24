import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: {
      background: string
      backgroundBox: string
      grayLine: string
      text: string
      textHighlight: string
      title: string
      red: string
      green: string
      blue: string
      blueDark: string
    }
    font: {
      family: {
        inter: string
        rajdhani: string
      }
      light: number
      normal: number
      bold: number
      sizes: {
        xsmall: string
        small: string
        medium: string
        large: string
        xlarge: string
        xxlarge: string
      }
    }
  }

  export interface CustomTheme {
    name: string
    colors: {
      background: string
      backgroundBox: string
      grayLine: string
      text: string
      textHighlight: string
      title: string
      red: string
      green: string
      blue: string
      blueDark: string
    }
  }
}
