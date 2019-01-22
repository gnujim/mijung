import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const ResumeEducationContainer = styled.div``;

interface ResumeEducationQueryData {
  data: {
    allContentfulJsonResume: {
      edges: Array<{
        node: {
          jsonResume: {
            education: Array<{
              area: string;
              date: string;
              institution: string;
            }>;
          };
        };
      }>;
    };
  };
}

export const ResumeEducation = () => (
  <StaticQuery
    query={graphql`
      query ResumeEducationQueryData {
        allContentfulJsonResume {
          edges {
            node {
              jsonResume {
                education {
                  area
                  date
                  institution
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ResumeEducationContainer>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.education[0].area}</div>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.education[0].date}</div>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.education[0].institution}</div>
      </ResumeEducationContainer>
    )}
  />
);
