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
import React from "react";
import {
  AboutContainer,
  Heading,
  SubHeading,
  Paragraph,
  FeatureList,
  FeatureItem,
} from "../components/StyledAboutPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
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
          <AboutContainer>
            <Heading>About Einstein</Heading>
            <Paragraph>
              Einstein is a revolutionary patent system built on blockchain
              technology, offering secure, transparent, and efficient patent
              registration and management. By leveraging the power of
              blockchain, Einstein ensures that inventors' rights are protected
              in a more accessible and immutable ledger.
            </Paragraph>

            <SubHeading>Features</SubHeading>
            <FeatureList>
              <FeatureItem>
                Decentralized patent management system ensuring security and
                transparency.
              </FeatureItem>
              <FeatureItem>
                Smart contract implementation for automatic royalty
                distributions.
              </FeatureItem>
              <FeatureItem>
                Global accessibility with a focus on user-friendly interfaces.
              </FeatureItem>
              <FeatureItem>
                Advanced search functionality powered by blockchain's immutable
                records.
              </FeatureItem>
            </FeatureList>

            <SubHeading>Benefits</SubHeading>
            <Paragraph>
              Utilizing Einstein, inventors and companies can streamline their
              patent filing process, ensure the integrity of their intellectual
              property, and engage with a community of innovators on a secure
              platform.
            </Paragraph>

            <SubHeading>Join Our Community</SubHeading>
            <Paragraph>
              Be part of a growing ecosystem of inventors and innovators
              leveraging blockchain technology to protect and manage their
              patents. Contact us to learn more about how Einstein can transform
              your patent management experience.
            </Paragraph>
          </AboutContainer>
        </div>
      </>
    </ThemeProvider>
  );
}
