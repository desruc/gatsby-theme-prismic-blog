import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';

import GatsbyImage from 'gatsby-image';

const Wrap = styled.div`
  position: relative;
  height: 500px;
  overflow: hidden;
  width: 100%;
`;

const Inner = styled.div(({ theme: { colors }, fade }) => {
  const { background: bg } = colors;
  const shade = rgba(bg, 0.4);

  const fadeBg = `background: linear-gradient(to bottom, ${shade} 0%, ${bg} 100%),
  linear-gradient(135deg, ${shade} 40%, ${bg} 100%),
  linear-gradient(-135deg, ${shade} 40%, ${bg} 100%)`;

  return `
    height: 500px;
    width: 100%;
    z-index: 0;
    .gatsby-image-wrapper {
      position: static !important;
      filter: greyscale(100%);
      > div {
        padding-bottom: 0 !important;
        height: 500px;
      }
    }
    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      ${fade && fadeBg}
    }
  `;
});

const ChildrenWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const Relative = styled.div`
  position: relative;
  height: 100%;
`;

const Hero = ({ image, fade, children }) => (
  <Wrap>
    <Inner fade={fade}>
      <GatsbyImage fluid={image} />
      {children && (
        <ChildrenWrap>
          <Relative>{children}</Relative>
        </ChildrenWrap>
      )}
    </Inner>
  </Wrap>
);

Hero.propTypes = {
  fade: PropTypes.bool,
  children: PropTypes.node
};

Hero.defaultProps = {
  fade: false,
  children: null
};

export default Hero;
