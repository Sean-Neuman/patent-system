// ProfilePage.js
import React from "react";
import { PageContainer, Title, PatentList } from "../components/StyledProfile";
import PatentCard from "../components/PatentCard";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/GlobalStyles";
import Navbar from "@/components/Navbar";
import patents from "@/mockPatents";

export default function ProfilePage() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
     
        <PageContainer>
          <Title>User's Patents</Title>
          <PatentList>
            {patents.map((patent) => (
              <PatentCard patent={patent} />
            ))}
          </PatentList>
        </PageContainer>
      </ThemeProvider>
    </>
  );
}
