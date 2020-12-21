import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const StyledHeader = styled.header(
  ({ theme: { colors } }) => `
  background: ${colors.background};
`
);

const Header = () => (
  <StyledHeader>
    <Container>
      <h2>Brand name</h2>
    </Container>
  </StyledHeader>
);

export default Header;
