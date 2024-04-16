// StyledProfile.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: #333;
  text-align: center;
`;

export const PatentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const PatentCard = styled.div`
  width: 300px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
  border-radius: 8px;
`;

export const PatentTitle = styled.h2`
  font-size: 20px;
  color: #007bff;
`;

export const PatentDescription = styled.p`
  color: #666;
`;
