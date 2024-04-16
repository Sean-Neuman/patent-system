import styled from "styled-components";
import { theme } from "../styles/theme";

export const FormContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.cardbackground};
  border-radius: 8px;
  max-width: 500px;
  margin: 20px auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const TextInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FileInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  

`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.buttoncolor};
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonhover};
  }
`;
