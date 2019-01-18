// Third-party imports
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Slider from 'react-slick';

const PortfolioContainer = styled.div`
  border: 1px #e3b5a5;
  margin: 50px 0;
`;

const PortfolioTitle = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 40px;
  font-weight: 100;
`;

const PortfolioCarousel = styled.div`
  font-size: 14px;
  /* background-color: black; */
  color: #444;
`;

const Project = styled.div`
  border: 1px dashed pink;
  background-color: #fefefe;
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
`;

const ProjectLeft = styled.div``;

const ProjectTitle = styled.div`
  font-size: 36px;
`;

const ProjectDescription = styled.div`
  font-size: 24px;
`;

const ProjectLink = styled.a`
  color: #444;
`;

const ProjectDate = styled.div`
  font-size: 20px;
`;

const ProjectImg = styled.img`
  /* width: 300px; */
  height: auto;
`;

const SliderArrow = styled.div`
  border-radius: 50%;
  background-color: green;
  height: 10px;
  width: 10px;
`;

// Slick Slider Settings
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '100px',
};

interface PortfolioQueryData {
  data: {
    allContentfulJsonResume: {
      edges: Array<{
        node: {
          jsonResume: {
            projects: Array<{
              name: string;
              summary: string;
              website: string;
              releaseDate: string;
            }>;
          };
        };
      }>;
    };
  };
}

export const Portfolio = () => (
  <StaticQuery
    query={graphql`
      query PortfolioQuery {
        allContentfulJsonResume {
          edges {
            node {
              jsonResume {
                projects {
                  name
                  summary
                  website
                  releaseDate
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <PortfolioContainer>
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <PortfolioCarousel>
          <Slider {...settings}>
            {data.allContentfulJsonResume.edges[0].node.jsonResume.projects.map(project => {
              return (
                <Project key={project.name}>
                  <ProjectLeft>
                    <ProjectTitle>{project.name}</ProjectTitle>
                    <ProjectLink href={project.website}>{project.website}</ProjectLink>
                    <ProjectDate>{project.releaseDate}</ProjectDate>
                    <ProjectDescription>{project.summary}</ProjectDescription>
                  </ProjectLeft>
                  <ProjectImg src="https://picsum.photos/400/300/?random" />
                </Project>
              );
            })}
          </Slider>
        </PortfolioCarousel>
      </PortfolioContainer>
    )}
  />
);
