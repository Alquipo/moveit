export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: {
      inter: '"Inter", sans-serif',
      rajdhani: '"Rajdhani", sans-serif'
    },
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  },
  colors: {
    lightBg: '#f2f3f5',
    white: '#fff',
    grayLine: '#DCDDE0',
    text: '#666666',
    textHighlight: '#B3B9FF',
    title: '#2E384D',
    red: '#E89F5B',
    green: '#4CD62B',
    bue: '#5965E0',
    blueDark: '#4953B8',
    blueTwitter: '#2AA9E0'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
