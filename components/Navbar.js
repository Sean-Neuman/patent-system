import React from "react";
import { NavbarContainer, NavbarLinks, LoginButton } from "./StyledNavbar";
import { GlobalStyles } from "@/styles/GlobalStyles";

const Navbar = () => (
  <>
    <GlobalStyles />
    <NavbarContainer>
      <NavbarLinks>
        <a href="/">Home</a>
        <a href="/ProfilePage">Profile</a>
        <a href="/explore">Explore</a>
        <a href="/create-patent">Create Patent</a>
      </NavbarLinks>
      <LoginButton>Login</LoginButton>
    </NavbarContainer>
  </>
);

export default Navbar;
