// Third-party imports
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const AboutContainer = styled.div`
  /* background-color: #e3b5a5; */
  border: 1px dashed #e3b5a5;
  display: flex;
`;

const Img = styled.img`
  max-width: 40vw;
  height: auto;
  object-fit: contain;
`;

const PirateText = styled.div`
  color: #444444;
  font-size: 20px;
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
//       <PirateText>{data.allContentfulAbout.edges[0].node.aboutText.aboutText}</PirateText>
//       <Img src={data.allContentfulAbout.edges[0].node.aboutPhoto.file.url} />
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
        <PirateText>{data.allContentfulAbout.edges[0].node.aboutText.aboutText}</PirateText>
        <Img src={data.allContentfulAbout.edges[0].node.aboutPhoto.file.url} />
      </AboutContainer>
    )}
  />
);
