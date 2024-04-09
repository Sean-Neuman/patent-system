import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import AboutPage from "../components/AboutPage";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/GlobalStyles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <Head>
          <title>Project Einstien</title>
          <meta name="description" content="A " />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <GlobalStyles />
        <div>
          {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
          <Navbar />
          <AboutPage />
          {/* More components like Footer can be added here */}
        </div>
      </>
    </ThemeProvider>
  );
}
