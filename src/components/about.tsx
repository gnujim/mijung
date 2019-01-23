// Third-party imports
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const AboutContainer = styled.div`
  border: 1px dashed #e3b5a5;
  display: flex;
  margin: 40px 0;
  flex-direction: column;
  padding: 0 10px;
  @media (min-width: 577px) {
    justify-content: space-between;
    flex-direction: row;
    padding: 0;
  }
  @media (min-width: 890px) {
    margin: 40px 10%;
  }
`;

const AboutImgMobile = styled.img`
  object-fit: contain;
  max-height: 300px;
  display: block;
  @media (min-width: 577px) {
    display: none;
  }
  @media (min-width: 890px) {
  }
`;

const AboutImg = styled.img`
  display: none;
  @media (min-width: 577px) {
    object-fit: contain;
    max-height: 300px;
    max-width: 40vw;
    display: block;
  }
  @media (min-width: 890px) {
    max-height: 400px;
    height: 400px;
    width: 500px;
  }
`;

const AboutText = styled.div`
  color: #444444;
  font-size: 20px;
  margin-bottom: 30px;
  @media (min-width: 577px) {
  }
  @media (min-width: 890px) {
    width: 60%;
    margin-bottom: 0;
  }
`;

interface AboutQueryData {
  data: {
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
  };
}

// export const About = ({ data }: AboutProps) => {
//   return (
//     <AboutContainer>
//       <AboutText>{data.allContentfulAbout.edges[0].node.aboutText.aboutText}</AboutText>
//       <AboutImg src={data.allContentfulAbout.edges[0].node.aboutPhoto.file.url} />
//     </AboutContainer>
//   );
// };

export const About = () => (
  <StaticQuery
    query={graphql`
      query AboutQueryData {
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
    `}
    render={data => (
      <AboutContainer>
        <AboutImgMobile src={data.allContentfulAbout.edges[0].node.aboutPhoto.file.url} />
        <AboutText>{data.allContentfulAbout.edges[0].node.aboutText.aboutText}</AboutText>
        <AboutImg src={data.allContentfulAbout.edges[0].node.aboutPhoto.file.url} />
        {/* <AboutImg src="https://picsum.photos/500/400/?random" /> */}
      </AboutContainer>
    )}
  />
);
