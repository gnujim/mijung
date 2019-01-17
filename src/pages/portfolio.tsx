// Third-party imports
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Slider from 'react-slick';

const PortfolioContainer = styled.div`
  border: 1px #e3b5a5;
  margin: 50px 0;
`;

const PortfolioCarousel = styled.div`
  font-size: 14px;
  /* background-color: black; */
  color: pink;
`;

const CarouselItem = styled.div`
  border: 1px dashed pink;
  background-color: black;
  height: 40px;
`;

const CarouselName = styled.div`
  font-size: 36px;
`;

const SliderArrow = styled.div`
  border-radius: 50%;
  background-color: green;
  height: 10px;
  width: 10px;
`;

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '30px',
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
        <h1>Portfolio</h1>
        <PortfolioCarousel>
          <Slider {...settings}>
            {data.allContentfulJsonResume.edges[0].node.jsonResume.projects.map(project => {
              return (
                <CarouselItem key={project.name}>
                  <CarouselName>{project.name}</CarouselName>
                </CarouselItem>
              );
            })}
          </Slider>
        </PortfolioCarousel>
      </PortfolioContainer>
    )}
  />
);
