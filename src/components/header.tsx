import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import { Contact } from './contact';

const HeaderContainer = styled.div`
  background-color: #fdfbf7;
  border: 1px dashed #e3b5a5;
  box-shadow: 8px 8px #e3b5a5c7;
  /* font-family: 'Playfair Display', serif; */
  /* height: 100px; */
  padding: 0 10px;
  display: flex;
  @media (min-width: 577px) {
  }
  @media (min-width: 890px) {
    align-items: center;
    padding: 0 50px;
    height: 100px;
  }
`;

const HeaderContent = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  padding-bottom: 7px;
  @media (min-width: 577px) {
  }
  @media (min-width: 890px) {
    align-items: center;
    flex-direction: row;
  }
`;

const Name = styled.div`
  color: #333;
  font-family: 'Playfair Display', serif;
  font-size: 55px;
  font-weight: 700;
  /* margin: 10px 0; */
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
        <HeaderContent>
          <Name>{data.allContentfulJsonResume.edges[0].node.jsonResume.basics.name}</Name>
          <Contact />
        </HeaderContent>
      </HeaderContainer>
    )}
  />
);
