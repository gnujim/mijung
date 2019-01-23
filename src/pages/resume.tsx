import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

import { Resume } from '../resume';
import { ResumeSidebar } from '../components/resumeSidebar';
import { ResumeBody } from '../components/resumeBody';
import { GlobalStyle } from '../pages/index';

const ResumeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 1px dashed #e3b5a5;
`;

interface ResumeQueryData {
  allContentfulJsonResume: {
    edges: Array<{
      node: {
        jsonResume: Resume;
      };
    }>;
  };
  allContentfulAbout: {
    edges: Array<{
      node: {
        aboutText: {
          aboutText: string;
        };
      };
    }>;
  };
}

const query = graphql`
  query ResumeQueryData {
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
            skills {
              title
              skills
            }
            projects {
              name
              summary
              website
              releaseDate
            }
            education {
              area
              date
              institution
            }
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
`;

export default () => (
  <StaticQuery
    query={query}
    render={(queryResult: ResumeQueryData) => {
      const { allContentfulAbout, allContentfulJsonResume } = queryResult;

      const resume = allContentfulJsonResume.edges[0].node.jsonResume;
      const { basics } = resume;
      const aboutText = allContentfulAbout.edges[0].node.aboutText.aboutText;

      return (
        <>
          <GlobalStyle />
          <Link to="/">Home</Link>
          <ResumeContainer>
            <ResumeSidebar basics={basics} aboutText={aboutText} />
            <ResumeBody resume={resume} />
          </ResumeContainer>
        </>
      );
    }}
  />
);
