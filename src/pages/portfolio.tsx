// Third-party imports
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  display: flex;
  border: 1px dashed violet;
`;

export const Portfolio = () => {
  return (
    <PortfolioContainer>
      <h1>Portfolio</h1>
      <div className="portfolio-carousel" />
    </PortfolioContainer>
  );
};
