// Third-party imports
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  border: 1px dashed cyan;
`;

// export const Contact = () => {
export default class Contact extends React.Component<{}> {
  public render() {
    return (
      <ContactContainer>
        <a href="mailto:mijung.m@gmail.com">email</a>
        <a href="tel:16046167795">phone</a>
        <a href="" />
      </ContactContainer>
    );
  }
}
