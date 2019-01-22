import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const ResumeProjectsContainer = styled.div``;

interface ResumeSkillsQueryData {
  data: {
    allContentfulJsonResume: {
      edges: Array<{
        node: {
          jsonResume: {
            projects: Array<{
              name: string;
              summary: string;
              website: string;
              releaseDate: string;
            }>;
          };
        };
      }>;
    };
  };
}

export const ResumeProjects = () => (
  <StaticQuery
    query={graphql`
      query ResumeProjectssQueryData {
        allContentfulJsonResume {
          edges {
            node {
              jsonResume {
                projects {
                  name
                  summary
                  website
                  releaseDate
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ResumeProjectsContainer>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.projects[0].name}</div>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.projects[0].summary}</div>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.projects[0].website}</div>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.projects[0].releaseDate}</div>
      </ResumeProjectsContainer>
    )}
  />
);
