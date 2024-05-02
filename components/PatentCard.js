// src/components/PatentCard.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  background-color: ${({ theme }) => theme.cardbackground};
  border-radius: 8px;
  padding: 8px 24px;
  margin: 8px 0;
  max-width: 300px;

  

  

`;
export const Owner = styled.p`
  
  font-size: 0.8rem;
`;

const PatentCard = ({ patent }) => (
  <Div>
    <h3>{patent.title}</h3>
    <p>{patent.description}</p>
    {/* <Link to={`/patents/${patent.id}`}>View Patent</Link> */}
    <Owner>Owner: {patent.creator}</Owner>
  </Div>
);

export default PatentCard;
