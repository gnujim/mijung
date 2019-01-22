import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const ResumeSkillsContainer = styled.div``;

interface ResumeSkillsQueryData {
  data: {
    allContentfulJsonResume: {
      edges: Array<{
        node: {
          jsonResume: {
            skills: Array<{
              title: string;
              skills: string;
            }>;
          };
        };
      }>;
    };
  };
}

export const ResumeSkills = () => (
  <StaticQuery
    query={graphql`
      query ResumeSkillsQueryData {
        allContentfulJsonResume {
          edges {
            node {
              jsonResume {
                skills {
                  title
                  skills
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ResumeSkillsContainer>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.skills[0].title}</div>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.skills[0].skills}</div>
      </ResumeSkillsContainer>
    )}
  />
);
