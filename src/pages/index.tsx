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

// Styled Components Global Styles
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Cutive+Mono|Scope+One|Work+Sans|IBM+Plex+Sans:100,400|Karma|Libre+Baskerville:700|Playfair+Display:400,700|');

html {
  /* margin: 0 50px 50px 50px; */
}
body {
  /* background: #ededed; */
  font-family: 'Cutive Mono', monospace;
  /* font-family: 'IBM Plex Sans', sans-serif; */
  /* font-weight: 100; */
  border: 1px dashed #e3b5a5;
  margin: 10px 20px 30px 20px;
  /* height: 100%; */
  /* margin: 20px 50px 50px 50px; */
  /* letter-spacing: -1px; */
  /* margin-top: 50px; */
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
