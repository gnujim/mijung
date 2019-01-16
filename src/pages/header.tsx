import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import Contact from './contact';

const HeaderContainer = styled.div`
  border: 1px dashed black;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 55px;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div`
  font-family: 'Crimson Text', serif;
  color: #333;
  font-size: 40px;
  margin: 22px 0;
`;

// Query Structure
interface HeaderProps {
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

export const Header = ({ data }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Name>{data.allContentfulJsonResume.edges[0].node.jsonResume.basics.name}</Name>
      <Contact />
    </HeaderContainer>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
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
    render={data => <Header data={data} />}
  />
);
