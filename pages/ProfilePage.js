// ProfilePage.js
import React from "react";
import { PageContainer, Title, PatentList } from "../components/StyledProfile";
import PatentCard from "../components/PatentCard";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/theme";
import { globalStyles } from "../styles/GlobalStyles";
import Navbar from "@/components/Navbar";
// Mock data for patents, replace with your actual data fetching logic
const patents = [
  { id: 1, title: "Patent 1", description: "Description of Patent 1" },
  { id: 2, title: "Patent 2", description: "Description of Patent 2" },
  // Add more patents as needed
];

export default function ProfilePage() {
  return (
    <>
      <ThemeProvider theme={darkTheme}> 
      <globalStyles />
      <Navbar />
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
