import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import Hero from './Hero';

const Inner = styled.div`
  padding: 32px 0px;
`;

const Card = styled.div(
  ({ theme: { colors, borderRadius, boxShadow } }) => `
  background: ${colors.white};
  padding: 2rem;
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
`
);

const HomepageHero = ({ image }) => (
  <Hero image={image}>
    <Container>
      <Inner>
        <Card>Hello</Card>
      </Inner>
    </Container>
  </Hero>
);

export default HomepageHero;
