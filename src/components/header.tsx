import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

import { Contact } from './contact';

const HeaderContainer = styled.div`
  align-items: center;
  background-color: #fdfbf7;
  border: 1px dashed #e3b5a5;
  box-shadow: 8px 8px #e3b5a5c7;
  display: flex;
  /* font-family: 'Playfair Display', serif; */
  height: 100px;
  justify-content: space-between;
  padding: 0 50px;
`;

const Name = styled.div`
  color: #333;
  font-family: 'Playfair Display', serif;
  font-size: 55px;
  font-weight: 700;
  /* margin: 10px 0; */
`;

const ResumeLink = styled(Link)`
  border-bottom: 0.5px dashed #fdfbf7;
  color: #333;
  font-size: 22px;
  opacity: 1;
  padding: 5px 0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
    border-bottom: 0.5px dashed #e3b5a5;
  }
  &:visited {
    color: #333;
  }
`;

interface HeaderQueryData {
  data: {
    allContentfulJsonResume: {
      edges: Array<{
        node: {
          jsonResume: {
            basics: {
              name: string;
            };
          };
        };
      }>;
    };
  };
}

export const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderQueryData {
        allContentfulJsonResume {
          edges {
            node {
              jsonResume {
                basics {
                  name
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderContainer>
        <Name>{data.allContentfulJsonResume.edges[0].node.jsonResume.basics.name}</Name>
        <ResumeLink to="/resume/">Resume</ResumeLink>
        <Contact />
      </HeaderContainer>
    )}
  />
);
