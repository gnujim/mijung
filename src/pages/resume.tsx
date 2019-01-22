import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import { Header } from '../components/header';

const ResumeContainer = styled.div``;

const ResumeSidebarContainer = styled.div``;

const ResumeBodyContainer = styled.div``;

interface ResumeQueryData {
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
            skills: Array<{
              title: string;
              skills: string;
            }>;
            projects: Array<{
              name: string;
              summary: string;
              website: string;
              releaseDate: string;
            }>;
            education: Array<{
              area: string;
              date: string;
              institution: string;
            }>;
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

export default () => (
  <>
    <Link to="/">Home</Link>
    <ResumeContainer>
      <ResumeSidebar />
      <ResumeBodyContainer>
        {/* Skills */}
        {/* Projects */}
        {/* Education */}
        {/* Employment */}
      </ResumeBodyContainer>
    </ResumeContainer>
  </>
);

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
