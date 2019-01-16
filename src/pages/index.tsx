// Third-party imports
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Local imports
import About from './about';
import Portfolio from './portfolio';
import Header from './header';

// Styled Components Global Styles
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Cutive+Mono|Crimson+Text|Work+Sans|Nanum+Gothic+Coding');

html {
  margin: 50px;
}
body {
  /* background: #fefefe; */
  background: #ededed;
  font-family: 'Work Sans', sans-serif;
  border: 1px dashed #e3b5a5;
  height: 100%;
  margin-top: 40px;
}
`;

// Styled Components

const Footer = styled.div`
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

export const Index = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Portfolio />
      <Footer>
        Icons made by <FooterLink href="https://freepik.com">Freepik</FooterLink> from{' '}
        <FooterLink href="https://flaticon.com">www.flaticon.com</FooterLink>
      </Footer>
    </>
  );
};

// state = {
//   show: 'blue',
// };
// componentDidMount() {
//   window.addEventListener('scroll', event => {
//     let show;
//     if (window.scrollY < 50) {
//       // console.log('LESS');
//       show = 'green';
//     } else {
//       // console.log(window.scrollY);
//       show = 'blue';
//     }
//     this.setState({
//       show,
//     });
//   });
// }
