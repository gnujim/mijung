import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { ResumeSidebar } from '../components/resumeSidebar';
import { ResumeBody } from '../components/resumeBody';

const ResumeContainer = styled.div``;

export default () => (
  <>
    <Link to="/">Home</Link>
    <ResumeContainer>
      <ResumeSidebar />
      <ResumeBody />
    </ResumeContainer>
  </>
);
