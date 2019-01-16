// Third-party imports
import React from 'react';
import { graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Local imports
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';

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

interface IndexPageProps {
  data: {
    allContentfulName: {
      edges: Array<{
        node: {
          firstName: string;
          lastName: string;
        };
      }>;
    };
  };
}

// MY FIRST GRAPHQL QUERY WOOHoo
export const query = graphql`
  query IndexPageQuery {
    allContentfulName {
      edges {
        node {
          firstName
          lastName
        }
      }
    }
  }
`;

// STYLING
const Header = styled.div<{ borderColor: string }>`
  border: 1px dashed ${props => props.borderColor};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 55px;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div`
  font-family: 'Crimson Text', serif;
  color: #333;
  font-size: 40px;
  margin: 22px 0;
`;

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

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  state = {
    show: 'blue',
  };
  componentDidMount() {
    window.addEventListener('scroll', event => {
      let show;
      if (window.scrollY < 50) {
        // console.log('LESS');
        show = 'green';
      } else {
        // console.log(window.scrollY);
        show = 'blue';
      }
      this.setState({
        show,
      });
    });
  }

  public render() {
    const { firstName, lastName } = this.props.data.allContentfulName.edges[0].node;

    return (
      <>
        <GlobalStyle />
        <Header borderColor={this.state.show}>
          <Name>
            {firstName} {lastName}
          </Name>
          <Contact />
        </Header>
        <About />
        <Portfolio />
        <Footer>
          Icons made by <FooterLink href="https://freepik.com">Freepik</FooterLink> from{' '}
          <FooterLink href="https://flaticon.com">www.flaticon.com</FooterLink>
        </Footer>
      </>
    );
  }
}
