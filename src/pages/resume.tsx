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
import homeIcon from '../../assets/my-icons-collection/png/003-home.png';

const ResumeContainer = styled.div`
  @media print {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  @media (min-width: 577px) {
  }
  @media (min-width: 890px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  @media (min-width: 1035px) {
  }
`;

const HomeLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  /* margin: 15px 0; */
  position: absolute;
  top: 10px;
  left: 10px;
  &:visited {
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    font-weight: 600;
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
          <HomeLink to="/">
            <img style={{ width: '20px', height: '20px', marginRight: '10px' }} src={homeIcon} />
            Home
          </HomeLink>
          <ResumeContainer>
            <ResumeSidebar resume={resume} />
            <ResumeBody resume={resume} />
          </ResumeContainer>
        </>
      );
    }}
  />
);
