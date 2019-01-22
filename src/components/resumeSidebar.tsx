import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const ResumeSidebarContainer = styled.div`
  background-color: #fdfbf7;
  border: 1px dashed #e3b5a5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 10px;
`;

const ResumeSidebarTop = styled.section``;

const ResumeName = styled.div`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #313131;
  font-size: 55px;
`;

const ResumeBio = styled.div``;

const ResumeSidebarBottom = styled.section`
  display: flex;
  flex-direction: column;
`;

const ResumeLink = styled.a`
  color: #444;
  text-decoration: none;
`;

const ResumeIcon = styled.img``;

interface ResumeSidebarQueryData {
  data: {
    allContentfulJsonResume: {
      edges: Array<{
        node: {
          jsonResume: {
            basics: {
              name: string;
              email: string;
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
                  email
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
        <ResumeSidebarTop>
          <ResumeName>
            {data.allContentfulJsonResume.edges[0].node.jsonResume.basics.name}
          </ResumeName>
          <ResumeBio>{data.allContentfulAbout.edges[0].node.aboutText.aboutText}</ResumeBio>
        </ResumeSidebarTop>
        <ResumeSidebarBottom>
          <div>{data.allContentfulJsonResume.edges[0].node.jsonResume.basics.location}</div>
          <ResumeLink
            href={`tel:${data.allContentfulJsonResume.edges[0].node.jsonResume.basics.phone}`}
          >
            phone
          </ResumeLink>
          <ResumeLink
            href={`mailto:${data.allContentfulJsonResume.edges[0].node.jsonResume.basics.email}`}
          >
            email
          </ResumeLink>
          <ResumeLink
            href={data.allContentfulJsonResume.edges[0].node.jsonResume.basics.github}
            target="_blank"
          >
            github
          </ResumeLink>
          <ResumeLink
            href={data.allContentfulJsonResume.edges[0].node.jsonResume.basics.linkedin}
            target="_blank"
          >
            linkedin
          </ResumeLink>
          <ResumeLink href="#" target="_blank">
            angel.co?
          </ResumeLink>
        </ResumeSidebarBottom>
      </ResumeSidebarContainer>
    )}
  />
);
