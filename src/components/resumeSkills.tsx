import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const ResumeSkillsContainer = styled.div``;

const SkillsTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
`;

const SkillsList = styled.div``;

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
        {data.allContentfulJsonResume.edges[0].node.jsonResume.skills.map(category => {
          return (
            <>
              <SkillsTitle>{category.title}</SkillsTitle>
              <SkillsList>{category.skills}</SkillsList>
            </>
          );
        })}
      </ResumeSkillsContainer>
    )}
  />
);
