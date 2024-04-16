import React, { useState } from "react";
import {
  FormContainer,
  Form,
  Label,
  TextInput,
  TextArea,
  FileInput,
  SubmitButton,
} from "../components/StyledCreatePatent";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/GlobalStyles";
import Navbar from "../components/Navbar";

export default function CreatePatentPage() {
  const [patentTitle, setPatentTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blueprint, setBlueprint] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here.
    console.log({ patentTitle, description, blueprint });
  };

  const handleBlueprintChange = (e) => {
    setBlueprint(e.target.files[0]);
  };

  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Navbar />
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="patentTitle">Title</Label>
            <TextInput
              id="patentTitle"
              value={patentTitle}
              onChange={(e) => setPatentTitle(e.target.value)}
              required
            />

            <Label htmlFor="description">Description</Label>
            <TextArea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <Label htmlFor="blueprint">Blueprint Upload</Label>
            <FileInput
              id="blueprint"
              type="file"
              onChange={handleBlueprintChange}
              required
            />

            <SubmitButton type="submit">Submit Patent</SubmitButton>
          </Form>
        </FormContainer>
      </ThemeProvider>
    </>
  );
}
