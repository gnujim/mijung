// Third-party imports
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Slider from 'react-slick';

const PortfolioContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  border: 1px dashed violet;
`;

const PortfolioCarousel = styled.div`
  font-size: 14px;
  /* background-color: black; */
  color: pink;
  /* border: 1px dashed pink; */
  /* width: 90%; */
`;

const CarouselItem = styled.p`
  font-size: 36px;
  border: 1px dashed pink;
  background-color: black;
  margin: 10px;
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
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '20px',
};

// export const Portfolio = () => {
export default class Portfolio extends React.Component<{}> {
  public render() {
    return (
      <PortfolioContainer>
        <h1>Portfolio</h1>
        <PortfolioCarousel>
          <Slider {...settings}>
            <div>
              <CarouselItem>1</CarouselItem>
            </div>
            <div>
              <CarouselItem>2</CarouselItem>
            </div>
            <div>
              <CarouselItem>3</CarouselItem>
            </div>
            <div>
              <CarouselItem>4</CarouselItem>
            </div>
            <div>
              <CarouselItem>5</CarouselItem>
            </div>
            <div>
              <CarouselItem>6</CarouselItem>
            </div>
          </Slider>
        </PortfolioCarousel>
      </PortfolioContainer>
    );
  }
}
