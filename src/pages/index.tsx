// Third-party imports
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Local imports
import { About } from '../components/about';
import { Portfolio } from '../components/portfolio';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// Styled Components Global Styles
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Cutive+Mono|Playfair+Display:400,700|');

html {
  /* margin: 0 50px 50px 50px; */
  background: #fdfbf7;
  transition: all 0.3s ease-in-out;
}
body {
  font-family: 'Cutive Mono', monospace;
  margin: 20px;
  /* background: #ededed; */
  /* height: 100%; */
  /* margin: 20px 50px 50px 50px; */
  /* letter-spacing: -1px; */
  /* margin-top: 50px; */
  @media (min-width: 577px) {

  }
  @media (min-width: 890px) {
  margin: 10px 20px 30px 20px;
  }
}
`;

export default () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Portfolio />
      <Footer />
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
