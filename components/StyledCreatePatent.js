import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
