import React from "react";
import {
  NavbarContainer,
  NavbarLinks,
  LoginButton,
} from "../components/StyledNavbar";
import { GlobalStyles } from "@/styles/GlobalStyles";
import {
  ChainId,
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <ThirdwebProvider
        activeChain="binance-testnet"
        clientId="1156c0c240b1cf53b5fbba1db35729d9"
      >
        <NavbarContainer>
          <NavbarLinks>
            <a href="/">Home</a>
            <a href="/ProfilePage">Profile</a>
            <a href="/explore">Explore</a>
            <a href="/create-patent">Create Patent</a>
          </NavbarLinks>
          <ConnectWallet />
        </NavbarContainer>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ThemeProvider>
  );
}
export default App;
