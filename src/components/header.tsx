import React from 'react';
import styled from 'styled-components';

import { Contact } from './contact';
import { ResumeBasics } from '../resume';

const HeaderContainer = styled.div`
  background-color: #fdfbf7;
  border: 1px dashed #e3b5a5;
  box-shadow: 8px 8px #e3b5a5c7;
  padding: 0 10px;
  display: flex;
  @media (min-width: 890px) {
    align-items: center;
    padding: 0 50px;
    height: 100px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  padding-bottom: 7px;
  @media (min-width: 890px) {
    align-items: center;
    flex-direction: row;
  }
`;

const Name = styled.div`
  color: #333;
  font-family: 'Playfair Display', serif;
  font-size: 55px;
  font-weight: 700;
`;

interface HeaderProps {
  basics: ResumeBasics;
}

export const Header = (props: HeaderProps) => {
  const { basics } = props;
  return (
    <HeaderContainer>
      <HeaderContent>
        <Name>{basics.name}</Name>
        <Contact basics={basics} />
      </HeaderContent>
    </HeaderContainer>
  );
};
