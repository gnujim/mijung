// Third-party imports
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Slider from 'react-slick';

import linkIcon from '../../assets/my-icons-collection/png/unlink.png';

const PortfolioContainer = styled.div`
  /* border: 1px #e3b5a5; */
  background-color: #fdfbf7;

  border: 1px dashed black;
  padding: 30px 50px;
`;

const PortfolioTitle = styled.div`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 46px;
  margin-bottom: 15px;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 15px;
`;

const PortfolioCarousel = styled.div`
  font-size: 14px;
  /* background-color: black; */
  color: #444;
`;

const Project = styled.div`
  border: 1px dashed pink;
  position: relative;
  /* background-color: #fefefe; */
`;

const ProjectOverlay = styled.div`
  /* background-color: #444444; */
  /* display: flex; */
  /* flex-direction: column; */
  /* height: 90%; */
  /* justify-content: center; */
  position: absolute;
  transition: opacity 0.3s ease-in-out;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  /* display: none; */
  background-color: #444;
  &:hover {
    /* display: block; */
    opacity: 0.3;
  }
`;

const ProjectText = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;
  right: 10px;
`;

const ProjectLeft = styled.div``;

const ProjectTitle = styled.div`
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 32px;
`;

const ProjectDescription = styled.div`
  font-size: 24px;
`;

const ProjectLink = styled.a`
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
  }
  &:hover {
  }
`;

const ProjectDate = styled.div`
  font-size: 20px;
`;

const ProjectImg = styled.img`
  width: auto;
  height: 100%;
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
        {/* <PortfolioCarousel>
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
        </PortfolioCarousel> */}
        <PortfolioGrid>
          {data.allContentfulJsonResume.edges[0].node.jsonResume.projects.map(project => {
            return (
              <Project key={project.name}>
                {/* <ProjectDescription>{project.summary}</ProjectDescription> */}
                <ProjectImg src="https://picsum.photos/400/300/?random" />
                <ProjectOverlay />
                <ProjectText>
                  {' '}
                  <ProjectLink href={project.website}>
                    <ProjectTitle>{project.name} </ProjectTitle>
                  </ProjectLink>
                  <ProjectDate>{project.releaseDate}</ProjectDate>
                </ProjectText>
              </Project>
            );
          })}
        </PortfolioGrid>
      </PortfolioContainer>
    )}
  />
);
