// Third-party imports
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Local imports
import { Resume } from '../resume';
import { About } from '../components/about';
// import { Portfolio } from '../components/portfolio';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

// Styled Components Global Styles
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Cutive+Mono|Playfair+Display:400,700');

/* TODO: GET RID OF TRANSITION JUMP ON RELOAD !!! */
* {
  box-sizing: border-box;  
}
html {
  padding: 0;
  margin: 0;
}
body {
  font-family: 'Cutive Mono', monospace;
  background: #fdfbf7;
  transition: all 0.3s ease-in-out;
  padding: 0;
  margin: 0;
}
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  max-width: 1300px;
  min-height: 675px;
  @media (min-width: 577px) {
    height: calc(100vh - 4px);
  }
  @media (min-width: 1320px) {
    margin: 0 auto;
  }
`;

const Spacer = styled.div`
  display: flex;
  flex-grow: 1;
`;

interface SiteQueryData {
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
        aboutPhoto: {
          file: {
            url: string;
          };
        };
      };
    }>;
  };
}

const query = graphql`
  query SiteQueryData {
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
            projects {
              name
              summary
              githubUrl
              website
              releaseDate
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
          aboutPhoto {
            file {
              url
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
    render={(queryResult: SiteQueryData) => {
      const { allContentfulAbout, allContentfulJsonResume } = queryResult;
      const resume = allContentfulJsonResume.edges[0].node.jsonResume;
      const { basics, projects } = resume;
      const aboutText = allContentfulAbout.edges[0].node.aboutText.aboutText;
      const aboutPhotoUrl = allContentfulAbout.edges[0].node.aboutPhoto.file.url;
      return (
        <>
          <Helmet>
            <title>Mij</title>
          </Helmet>
          <GlobalStyle />
          <BodyContainer>
            <Header basics={basics} />
            <About aboutText={aboutText} aboutPhotoUrl={aboutPhotoUrl} />
            {/* <Portfolio projects={projects} /> */}
            <Spacer />
            <Footer />
          </BodyContainer>
        </>
      );
    }}
  />
);
