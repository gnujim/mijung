// Third-party imports
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const AboutContainer = styled.div`
  border: 1px dashed #e3b5a5;
  display: flex;
  justify-content: space-between;
  margin: 40px 10%;
`;

const AboutImg = styled.img`
  height: 400px;
  width: 500px;
  /* height: auto; */
  max-width: 40vw;
  object-fit: contain;
`;

const AboutText = styled.div`
  color: #444444;
  font-size: 20px;
  width: 60%;
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
        <AboutText>{data.allContentfulAbout.edges[0].node.aboutText.aboutText}</AboutText>
        <AboutImg src={data.allContentfulAbout.edges[0].node.aboutPhoto.file.url} />
        {/* <AboutImg src="https://picsum.photos/500/400/?random" /> */}
      </AboutContainer>
    )}
  />
);
