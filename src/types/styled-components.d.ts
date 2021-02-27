import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      background: string
      backgroundOverlay: string
      backgroundBox: string
      backgroundIndex: string
      inputBackground: string
      backgroundLogo: string

      grayLine: string
      text: string
      textHighlight: string
      title: string
      red: string
      green: string
      blue: string
      blueDark: string
    }
    boxShadow: string
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
    title: string
    colors: {
      background: string
      backgroundOverlay: string
      backgroundBox: string
      backgroundIndex: string
      inputBackground: string
      backgroundLogo: string

      grayLine: string
      text: string
      textHighlight: string
      title: string
      red: string
      green: string
      blue: string
      blueDark: string
    }
    boxShadow: string
  }
}
