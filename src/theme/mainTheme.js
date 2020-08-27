const breakpoints = {
  xs: 420,
  s: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}

export const theme = {
  fonts: {
    mainFont: `'Lato', sans-serif`,
  },
  colors: {
    white: '#ffffff',
    dark: '#313131',
    gray: '#7D7D7D',
    gray100: '#707070',
    gray200: '#EEEEEE',
    gray300: '#BFBFBF',
  },
  regular: 400,
  bold: 700,
  superBold: 900,
  fontSize: {
    xs: '1.4rem',
    s: '1.4rem',
    m: '1.6rem',
    md: '1.9rem',
    lg: '2.2rem',
    lgm: '2.6rem',
    xl: '3rem',
    xlg: '3.6rem',
    xxl: '6rem',
    xxxl: '7.2rem',
  },
  navSize: {
    desktop: '100px',
    mobile: '80px',
  },
  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`
    return acc
  }, {}),
}
