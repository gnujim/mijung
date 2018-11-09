// Third-party imports
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// Local imports
import pic from '../../assets/badtaxidermy.jpg';

const AboutContainer = styled.div`
  display: flex;
  border: 1px dashed rebeccapurple;
`;

const Img = styled.img`
  max-width: 40vw;
  height: auto;
  object-fit: contain;
`;

// export const About = () => {
export default class About extends React.Component<{}> {
  public render() {
    return (
      <AboutContainer>
        <div className="about-text">
          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable
          strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me
          timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy
          black spot yardarm spyglass sheet transom heave to.
        </div>
        <Img src={pic} />
      </AboutContainer>
    );
  }
}
