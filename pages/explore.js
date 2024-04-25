// src/components/ExplorePage.js
import React, { useState } from "react";
import patents from "../mockPatents";
import PatentCard from "../components/PatentCard";
import Navbar from "@/components/Navbar";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { darkTheme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import {TextInput} from "@/components/StyledCreatePatent"

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatents = patents.filter((patent) =>
    patent.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <ThemeProvider theme = {darkTheme}>
    <GlobalStyles />
      <div>
        <TextInput
          type="text"
          placeholder="Search patents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "10px", margin: "10px", }}
        />
        <div>
          {filteredPatents.map((patent) => (
            <PatentCard key={patent.id} patent={patent} />
          ))}
        </div>
      </div>
      </ThemeProvider>
    </>
  );
}
