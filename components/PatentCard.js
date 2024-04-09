// src/components/PatentCard.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  border: "1px solid #ccc";
  padding: "20px";
  margin: "10px";
`;

const PatentCard = ({ patent }) => (
  <Div>
    <h3>{patent.title}</h3>
    <p>{patent.description}</p>
    <Link to={`/patents/${patent.id}`}>View Patent</Link>
  </Div>
);

export default PatentCard;
