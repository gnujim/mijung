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
  width: 100%;
  margin-top: 15px;
  /* padding: 5px; */
  @media (min-width: 577px) {
    margin-top: 0;
    justify-content: space-between;
    /* width: 40%; */
  }
  @media (min-width: 890px) {
    width: 60%;
  }
  @media (min-width: 1300px) {
    width: 45%;
  }
`;

const ResumeLink = styled(Link)`
  color: #333;
  font-size: 21px;
  opacity: 1;
  padding: 3px 0;
  text-decoration: none;

  &:visited {
    color: #333;
  }
  @media (min-width: 577px) {
  }
  @media (min-width: 890px) {
    border-bottom: 0.5px dashed #fdfbf7;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
      border-bottom: 0.5px dashed #e3b5a5;
    }
  }
`;

const ContactLink = styled.a`
  color: #333;
  font-size: 21px;
  opacity: 1;
  padding: 3px 0;
  text-decoration: none;
  &:visited {
    color: #333;
  }
  @media (min-width: 577px) {
  }
  @media (min-width: 890px) {
    border-bottom: 0.5px dashed #fdfbf7;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
      border-bottom: 0.5px dashed #e3b5a5;
    }
  }
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 40px 0 0;
  @media (min-width: 577px) {
    width: 14px;
    height: 14px;
    margin: 0 5px 0 0;
  }
  @media (min-width: 890px) {
  }
`;

const Text = styled.div`
  display: none;
  @media (min-width: 577px) {
    display: inline;
  }
  @media (min-width: 890px) {
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
        <ResumeLink to="/resume/">
          <Icon src={resumeIcon} />
          <Text>Resume</Text>
        </ResumeLink>

        <ContactLink
          href={data.allContentfulJsonResume.edges[0].node.jsonResume.basics.linkedin}
          target="_blank"
        >
          <Icon src={linkedinIcon} />
          <Text>LinkedIn</Text>
        </ContactLink>
        <ContactLink
          href={data.allContentfulJsonResume.edges[0].node.jsonResume.basics.github}
          target="_blank"
        >
          <Icon src={githubIcon} />
          <Text>Github</Text>
        </ContactLink>
        <ContactLink
          href={`mailto:${data.allContentfulJsonResume.edges[0].node.jsonResume.basics.email}`}
        >
          <Icon src={mailIcon} />
          <Text>Email Me</Text>
        </ContactLink>
      </ContactContainer>
    )}
  />
);
