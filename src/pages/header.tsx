import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import { Contact } from './contact';

const HeaderContainer = styled.div`
  align-items: center;
  border: 1px dashed black;
  display: flex;
  height: 100px;
  justify-content: space-between;
  /* left: 0; */
  /* padding: 0 55px; */
  /* position: fixed; */
  /* right: 0; */
  /* top: 0; */
`;

const Name = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  color: #333;
  font-size: 60px;
  font-weight: 100;
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
        <Name>{data.allContentfulJsonResume.edges[0].node.jsonResume.basics.name}</Name>
        <Contact />
      </HeaderContainer>
    )}
  />
);
