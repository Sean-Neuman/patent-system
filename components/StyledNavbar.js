import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 0.5rem 1rem;
`;

export const NavbarLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;

    &:hover {
      color: #ddd;
    }
  }
`;

export const LoginButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
