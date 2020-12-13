import React from 'react';
import { ThemeProvider } from 'styled-components'

import Header from './Header';

import theme from '../theme';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />
    {children}
  </ThemeProvider>
);

export default Layout;
