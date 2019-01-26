import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  border: 1px dashed #e3b5a5;
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  padding: 20px 10px;
  @media (min-width: 675px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 890px) {
    margin: 40px 10%;
    padding: 20px;
  }
  @media (min-width: 1300px) {
    justify-content: space-evenly;
  }
`;

const AboutImgMobile = styled.img`
  display: block;
  margin-bottom: 10px;
  width: 100%;
  object-fit: contain;
  @media (min-width: 675px) {
    display: none;
  }
`;

const AboutImg = styled.img`
  display: none;
  @media (min-width: 675px) {
    display: block;
    max-height: 300px;
    max-width: 40vw;
    object-fit: contain;
  }
  @media (min-width: 890px) {
    height: 400px;
    max-height: 400px;
    width: 500px;
  }
`;

const AboutText = styled.div`
  color: #444444;
  font-size: 20px;
  @media (min-width: 675px) {
    padding-right: 15px;
  }
  @media (min-width: 890px) {
    margin-bottom: 0;
  }
  @media (min-width: 1050px) {
    font-size: 22px;
  }
  @media (min-width: 1300px) {
    width: 40%;
  }
`;

interface AboutProps {
  aboutText: string;
  aboutPhotoUrl: string;
}

export const About = (props: AboutProps) => {
  const { aboutText, aboutPhotoUrl } = props;
  return (
    <AboutContainer>
      <AboutImgMobile src={aboutPhotoUrl} />
      <AboutText>{aboutText}</AboutText>
      <AboutImg src={aboutPhotoUrl} />
    </AboutContainer>
  );
};
