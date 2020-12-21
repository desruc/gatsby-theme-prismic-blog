const theme = {
  colors: {
    background: '#0f0e17',
    heading: '#fffffe',
    darkHeading: '#0f0e17',
    text: '#a7a9be',
    darkText: '#2e2f3e',
    primary: '#ff8906',
    secondary: '#f25f4c',
    tertiary: '#e53170'
  },
  fonts: {
    montserrat: '"Montserrat", Open Sans, sans-serif',
    openSans: '"Open Sans", Montserrat, sans-serif'
  },
  borderRadius: '8px',
  up: (breakpoint) => `@media (min-width: ${breakpoint}px)`,
  down: (breakpoint) => `@media (max-width: ${breakpoint}px)`,
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
};

export default theme;
