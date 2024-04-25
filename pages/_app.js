import React from "react";
import {
  NavbarContainer,
  NavbarLinks,
  LoginButton,
} from "../components/StyledNavbar";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";  

const activeChainId = ChainId.Mainnet;

function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ThemeProvider theme={darkTheme}> 
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
      <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  );
}
export default App;
