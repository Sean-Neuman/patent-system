// GlobalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body {
    background-color: ${({ theme }) => theme.background};
    
  }
  h1, h2, h3, h4, h5, h6, a, span, label, textarea, div {
    color: ${({ theme }) => theme.text};
  }
  p{
    color: ${({ theme }) => theme.backgroundtext};
  }
  input{
    color: #999;
    background-color: ${({ theme }) => theme.background};
  }
  textarea {
    resize: vertical;
    background-color: ${({ theme }) => theme.background};
  }
  input {
    background-color: ${({ theme }) => theme.background};
  }
  div{

  }
  .FormContainer{
    background-color: ${({ theme }) => theme.cardbackground};
  }
`;
