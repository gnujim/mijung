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
  border: 1px dashed cyan;
`;

const Icon = styled.img`
  width: 50px;
`;

interface ContactProps {
  data: {
    allContentfulInfo: {
      edges: Array<{
        node: {
          email: string;
          github: string;
          linkedIn: string;
        };
      }>;
    };
  };
}

export const Contact = ({ data }: ContactProps) => {
  return (
    <ContactContainer>
      <a href={`mailto:${data.allContentfulInfo.edges[0].node.email}`}>
        <Icon src={mailIcon} />
      </a>
      <a href="tel:16046167795">
        <Icon src={phoneIcon} />
      </a>
      <a href={data.allContentfulInfo.edges[0].node.github}>
        <Icon src={githubIcon} />
      </a>
      <a href={data.allContentfulInfo.edges[0].node.linkedIn}>
        <Icon src={linkedinIcon} />
      </a>
    </ContactContainer>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query ContactPageQuery {
        allContentfulInfo {
          edges {
            node {
              email
              github
              linkedIn
            }
          }
        }
      }
    `}
    render={data => <Contact data={data} />}
  />
);
