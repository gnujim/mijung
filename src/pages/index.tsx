// Third-party imports
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Local imports
import { About } from './about';
import { Portfolio } from './portfolio';
import { Header } from './header';
import { Footer } from './footer';

// Styled Components Global Styles
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Crimson+Text|Scope+One|Work+Sans|Nanum+Gothic+Coding|Alike+Angular|IBM+Plex+Sans:100,400|Karma');

html {
  margin: 0 50px 50px 50px;
}
body {
  /* background: #fefefe; */
  background: #ededed;
  font-family: 'Scope One', serif;
  border: 1px dashed #e3b5a5;
  height: 100%;
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
