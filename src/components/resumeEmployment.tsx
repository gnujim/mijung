import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const ResumeEmploymentContainer = styled.div``;

interface ResumeEmploymentQueryData {
  data: {
    allContentfulJsonResume: {
      edges: Array<{
        node: {
          jsonResume: {
            work: Array<{
              company: string;
              summary: string;
              position: string;
              website: string;
              startDate: string;
              endDate: string;
            }>;
          };
        };
      }>;
    };
  };
}

export const ResumeEmployment = () => (
  <StaticQuery
    query={graphql`
      query ResumeEmploymentQueryData {
        allContentfulJsonResume {
          edges {
            node {
              jsonResume {
                work {
                  company
                  summary
                  position
                  website
                  startDate
                  endDate
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ResumeEmploymentContainer>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.work[0].company}</div>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.work[0].summary}</div>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.work[0].position}</div>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.work[0].website}</div>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.work[0].startDate}</div>
        <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.work[0].endDate}</div>
      </ResumeEmploymentContainer>
    )}
  />
);
