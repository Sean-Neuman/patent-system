// GlobalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  textarea {
    resize: vertical;
    background-color: ${({ theme }) => theme.background};
  }
  input {
    background-color: ${({ theme }) => theme.background};
  }
`;
