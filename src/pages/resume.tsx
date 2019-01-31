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
  margin: 30px 20px;
  max-width: 1300px;
  @media print {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 0;
  }
  @media screen and (min-width: 890px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  @media screen and (min-width: 1320px) {
    margin: 30px auto;
  }
`;

const HomeLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  /* margin: 15px 0; */
  position: absolute;
  top: 7px;
  left: 20px;
  &:visited {
    color: inherit;
    text-decoration: none;
  }
  @media print {
    display: none;
  }
  @media screen and (min-width: 890px) {
    &:hover {
      font-weight: 600;
    }
  }
  @media screen and (min-width: 1320px) {
    left: calc((100vw - 1300px) / 2);
  }
`;

const HomeIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
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
            <HomeIcon src={homeIcon} />
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
