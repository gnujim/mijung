// Third-party imports
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Local imports
import { Resume } from '../resume';
import { About } from '../components/about';
import { Portfolio } from '../components/portfolio';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

// const sizes = {
//   desktop: 992,
//   tablet: 768,
//   phone: 576,
// };

// Styled Components Global Styles
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Cutive+Mono|Playfair+Display:400,700');

/* GET RID OF TRANSITION JUMP ON RELOAD !!! */
html {
  background: #fdfbf7;
  transition: all 0.3s ease-in-out;
  @media (min-width: 577px) {
  }
  @media (min-width: 890px) {
  }
  @media (min-width: 1035px) {

    margin: 0 50px 50px 50px;
  }
}

body {
  font-family: 'Cutive Mono', monospace;
  margin: 20px;
  /* background: #ededed; */
  /* height: 100%; */
  /* margin: 20px 50px 50px 50px; */
  /* letter-spacing: -1px; */
  /* margin-top: 50px; */
  @media (min-width: 577px) {

  }
  @media (min-width: 890px) {
    margin: 10px 20px 30px 20px;
  }
}
`;

interface SiteQueryData {
  allContentfulJsonResume: {
    edges: Array<{
      node: {
        // Is this ok if I'm not grabbing every Resume thing??
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
          <GlobalStyle />
          <Header basics={basics} />
          <About aboutText={aboutText} aboutPhotoUrl={aboutPhotoUrl} />
          <Portfolio projects={projects} />
          <Footer />
        </>
      );
    }}
  />
);

// state = {
//   show: 'blue',
// };
// componentDidMount() {
//   window.addEventListener('scroll', event => {
//     let show;
//     if (window.scrollY < 50) {
//       // console.log('LESS');
//       show = 'green';
//     } else {
//       // console.log(window.scrollY);
//       show = 'blue';
//     }
//     this.setState({
//       show,
//     });
//   });
// }
