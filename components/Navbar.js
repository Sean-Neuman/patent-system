import React from 'react';
import { NavbarContainer, NavbarLinks, LoginButton } from './StyledNavbar';

const Navbar = () => (
  <NavbarContainer>
    <NavbarLinks>
      <a href="#profile">Profile</a>
      <a href="#explore">Explore</a>
      <a href="#create-patent">Create Patent</a>
    </NavbarLinks>
    <LoginButton>Login</LoginButton>
  </NavbarContainer>
);

export default Navbar;
