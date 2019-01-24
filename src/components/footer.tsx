import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  margin-top: 25px;
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FooterLink = styled.a`
  border-bottom: 1px solid transparent;
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  &:visited {
    color: inherit;
  }
  &:hover {
    border-bottom: 1px solid #333;
  }
`;

export const Footer = () => {
  return (
    // Change Laterrrr
    <FooterContainer>
      <div>
        Icons made by <FooterLink href="https://freepik.com">Freepik</FooterLink> from{' '}
        <FooterLink href="https://flaticon.com">www.flaticon.com</FooterLink>
      </div>
      <div>&#169; 2019 Mijijijijiiiijjjjunguga</div>
    </FooterContainer>
  );
};
