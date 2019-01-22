// Third-party imports
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import githubIcon from '../../assets/my-icons-collection/png/001-github.png';
import linkedinIcon from '../../assets/my-icons-collection/png/002-linkedin.png';
import locationIcon from '../../assets/my-icons-collection/png/003-placeholder.png';
import phoneIcon from '../../assets/my-icons-collection/png/004-telephone.png';
import mailIcon from '../../assets/my-icons-collection/png/005-mail.png';

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px dashed cyan;
  width: 15%;
`;

const Icon = styled.img`
  opacity: 0.3;
  width: 30px;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

interface ContactQueryData {
  data: {
    allContentfulJsonResume: {
      edges: Array<{
        node: {
          jsonResume: {
            basics: {
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
  };
}

// export const Contact = ({ data }: ContactProps) => {
//   const contentful = data.allContentfulJsonResume.edges[0].node.jsonResume.basics;
//   return (
//     <ContactContainer>
//       <a href={`mailto:${contentful.email}`}>
//         <Icon src={mailIcon} />
//       </a>
//       <a href={`tel:${contentful.phone}`}>
//         <Icon src={phoneIcon} />
//       </a>
//       <a href={contentful.github}>
//         <Icon src={githubIcon} />
//       </a>
//       <a href={contentful.linkedin}>
//         <Icon src={linkedinIcon} />
//       </a>
//     </ContactContainer>
//   );
// };

export const Contact = () => (
  <StaticQuery
    query={graphql`
      query ContactQueryData {
        allContentfulJsonResume {
          edges {
            node {
              jsonResume {
                basics {
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
      }
    `}
    render={data => (
      <ContactContainer>
        <a href={data.allContentfulJsonResume.edges[0].node.jsonResume.basics.github}>
          <Icon src={githubIcon} />
        </a>
        <a href={data.allContentfulJsonResume.edges[0].node.jsonResume.basics.linkedin}>
          <Icon src={linkedinIcon} />
        </a>
        <a href={`mailto:${data.allContentfulJsonResume.edges[0].node.jsonResume.basics.email}`}>
          <Icon src={mailIcon} />
        </a>
      </ContactContainer>
    )}
  />
);
