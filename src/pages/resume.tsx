// Third-party imports
import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

// Local imports
import { Resume } from '../resume';
import { ResumeSidebar } from '../components/resumeSidebar';
import { ResumeBody } from '../components/resumeBody';
import { GlobalStyle } from '../pages/index';

// const sizes = {
//   desktop: 992,
//   tablet: 768,
//   phone: 576,
// };

const ResumeContainer = styled.div`
  /* border: 1px dashed #e3b5a5; */
  @media (min-width: 577px) {
  }
  @media (min-width: 890px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  @media (min-width: 1035px) {
  }
`;

interface ResumeQueryData {
  allContentfulJsonResume: {
    edges: Array<{
      node: {
        jsonResume: Resume;
      };
    }>;
  };
  // allContentfulAbout: {
  //   edges: Array<{
  //     node: {
  //       aboutText: {
  //         aboutText: string;
  //       };
  //     };
  //   }>;
  // };
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
              summary
            }
            skills {
              title
              skills
            }
            projects {
              name
              summary
              githubUrl
              website
              workUrl
              releaseDate
              stack
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
  }
`;

export default () => (
  <StaticQuery
    query={query}
    render={(queryResult: ResumeQueryData) => {
      const { allContentfulJsonResume } = queryResult;
      const resume = allContentfulJsonResume.edges[0].node.jsonResume;
      return (
        <>
          <Helmet>
            <title>Mij - Resume</title>
          </Helmet>
          <GlobalStyle />
          <Link to="/">Home</Link>
          <ResumeContainer>
            <ResumeSidebar resume={resume} />
            <ResumeBody resume={resume} />
          </ResumeContainer>
        </>
      );
    }}
  />
);
