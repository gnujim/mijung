import React from 'react';
import styled from 'styled-components';

// Styled Components
const FooterContainer = styled.div`
  width: 100%;
  font-size: 12px;
`;

const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  border-bottom: 1px solid transparent;
  &:visited {
    color: inherit;
  }
  &:hover {
    border-bottom: 1px solid #333;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      Icons made by <FooterLink href="https://freepik.com">Freepik</FooterLink> from{' '}
      <FooterLink href="https://flaticon.com">www.flaticon.com</FooterLink>
    </FooterContainer>
  );
};
