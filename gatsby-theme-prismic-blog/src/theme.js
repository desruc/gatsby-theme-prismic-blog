const theme = {
  colors: {
    background: '#0f0e17',
    heading: '#fffffe',
    darkHeading: '#0f0e17',
    text: '#a7a9be',
    darkText: '#2e2f3e',
    primary: '#ff8906',
    secondary: '#f25f4c',
    tertiary: '#e53170',
    white: '#ffffff'
  },
  boxShadow:
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
  fonts: {
    montserrat: '"Montserrat", Open Sans, sans-serif',
    openSans: '"Open Sans", Montserrat, sans-serif'
  },
  borderRadius: '8px',
  up: (breakpoint) => `@media (min-width: ${breakpoint}px)`,
  down: (breakpoint) => `@media (max-width: ${breakpoint}px)`,
  breakpoints: {
    xs: 600,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
};

export default theme;
