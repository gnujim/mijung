import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { ResumeSidebar } from '../components/resumeSidebar';
import { ResumeBody } from '../components/resumeBody';
// Do I have to import this here? Can it be global for all pages?
import { GlobalStyle } from '../pages/index';

const ResumeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 1px dashed #e3b5a5;
`;

export default () => (
  <>
    <GlobalStyle />
    <Link to="/">Home</Link>
    <ResumeContainer>
      <ResumeSidebar />
      <ResumeBody />
    </ResumeContainer>
  </>
);
