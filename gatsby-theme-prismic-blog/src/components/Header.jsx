import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';

import Container from './Container';
import SearchInput from './SearchInput';
import InstgramIcon from './InstagramIcon';

const StyledHeader = styled.header(
  ({ theme: { colors } }) => `
  background: ${colors.background};
`
);

const TopShelf = styled.div`
  padding: 32px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const BottomShelf = styled.div`
  padding: 32px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  li {
    margin: 0px 16px;
  }
`;

const NavLink = styled(Link)`
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.heading};
  transition: color 0.2s ease-in-out;
  :hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

const SocialLinks = styled.div`
  padding: 0px;
`;

const IconLink = styled(Link)`
  display: flex;
  color: ${({ theme: { colors } }) => colors.heading};
  transition: color 0.2s ease-in-out;
  :hover {
    color: ${({ theme: { colors } }) => colors.tertiary};
  }
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <TopShelf>
        <span>Brand</span>
        <SearchInput />
      </TopShelf>
      <BottomShelf>
        <List>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </List>
        <SocialLinks>
          <IconLink to="/">
            <InstgramIcon />
          </IconLink>
        </SocialLinks>
      </BottomShelf>
    </Container>
  </StyledHeader>
);

export default Header;
