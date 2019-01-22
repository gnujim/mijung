import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const ResumeSidebarContainer = styled.div``;

interface ResumeSidebarQueryData {
  data: {
    allContentfulJsonResume: {
      edges: Array<{
        node: {
          jsonResume: {
            basics: {
              name: string;
              phone: string;
              github: string;
              linkedin: string;
              location: string;
            };
          };
        };
      }>;
    };
    allContenfulAbout: {
      edges: Array<{
        node: {
          aboutText: {
            aboutText: string;
          };
        };
      }>;
    };
  };
}

export const ResumeSidebar = () => (
  <StaticQuery
    query={graphql`
      query ResumeSidebarQueryData {
        allContentfulJsonResume {
          edges {
            node {
              jsonResume {
                basics {
                  name
                  phone
                  github
                  linkedin
                  location
                }
              }
            }
          }
        }
        allContentfulAbout {
          edges {
            node {
              aboutText {
                aboutText
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ResumeSidebarContainer>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.basics.name}</div>
        <div>{data.allContentfulAbout.edges[0].node.aboutText.aboutText}</div>
        <div>
          <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.basics.phone}</div>
          <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.basics.github}</div>
          <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.basics.linkedin}</div>
          <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.basics.location}</div>
        </div>
      </ResumeSidebarContainer>
    )}
  />
);
