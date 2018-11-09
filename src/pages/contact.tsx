// Third-party imports
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  border: 1px dashed cyan;
`;

export const Contact = () => {
  return (
    <ContactContainer>
      <a href="mailto:mijung.m@gmail.com">email me</a>
    </ContactContainer>
  );
};
