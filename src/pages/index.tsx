// Third-party imports
import React from 'react';
import { graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

// Local imports
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Cutive+Mono');

html {
  margin: 50px;
}
body {
  background: #fefefe;
  font-family: 'Cutive Mono', monospace;
  border: 1px dashed red;
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
export const indexPageQuery = graphql`
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
`;

const Name = styled.div`
  color: #333;
  font-size: 34px;
  margin: 22px 0;
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
        </Header>
        <About />
        <Portfolio />
        <Contact />
      </>
    );
  }
}
