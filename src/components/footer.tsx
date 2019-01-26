import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  margin-top: 15px;
  font-size: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 675px) {
    margin-top: 25px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterLink = styled.a`
  border-bottom: 1px solid transparent;
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  &:visited {
    color: inherit;
  }
  @media (min-width: 890px) {
    &:hover {
      border-bottom: 1px solid #333;
    }
  }
`;

const FooterCopyright = styled.div`
  margin-top: 5px;
  @media (min-width: 675px) {
    margin-top: 0;
  }
`;

export const Footer = () => {
  return (
    // Change Laterrrr
    <FooterContainer>
      <div>
        Icons made by <FooterLink href="https://smashicons.com/">Smashicons</FooterLink>,{' '}
        <FooterLink href="https://freepik.com">Freepik</FooterLink>, and mavadee from{' '}
        <FooterLink href="https://flaticon.com">www.flaticon.com</FooterLink>
      </div>
      <FooterCopyright>&#169; 2019 Mijung Lee</FooterCopyright>
    </FooterContainer>
  );
};
