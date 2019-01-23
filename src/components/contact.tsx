// Third-party imports
import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

import githubIcon from '../../assets/my-icons-collection/png/001-github.png';
import linkedinIcon from '../../assets/my-icons-collection/png/linkedin.png';
import locationIcon from '../../assets/my-icons-collection/png/003-placeholder.png';
import phoneIcon from '../../assets/my-icons-collection/png/phone.png';
import mailIcon from '../../assets/my-icons-collection/png/email.png';
import resumeIcon from '../../assets/my-icons-collection/png/resume.png';

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  /* padding: 5px; */
`;

const ResumeLink = styled(Link)`
  border-bottom: 0.5px dashed #fdfbf7;
  color: #333;
  font-size: 21px;
  opacity: 1;
  padding: 3px 0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
    border-bottom: 0.5px dashed #e3b5a5;
  }
  &:visited {
    color: #333;
  }
`;

const ContactLink = styled.a`
  border-bottom: 0.5px dashed #fdfbf7;
  color: #333;
  font-size: 21px;
  opacity: 1;
  padding: 3px 0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
    border-bottom: 0.5px dashed #e3b5a5;
  }
  &:visited {
    color: #333;
  }
`;

const Icon = styled.img`
  width: 14px;
  height: 14px;
  margin: 0 5px 0 0;
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
        <ResumeLink to="/resume/">
          <Icon src={resumeIcon} />
          Resume
        </ResumeLink>

        <ContactLink href={data.allContentfulJsonResume.edges[0].node.jsonResume.basics.linkedin}>
          <Icon src={linkedinIcon} />
          LinkedIn
        </ContactLink>
        <ContactLink href={data.allContentfulJsonResume.edges[0].node.jsonResume.basics.github}>
          <Icon src={githubIcon} />
          Github
        </ContactLink>
        <ContactLink
          href={`mailto:${data.allContentfulJsonResume.edges[0].node.jsonResume.basics.email}`}
        >
          <Icon src={mailIcon} />
          Email Me
        </ContactLink>
      </ContactContainer>
    )}
  />
);
