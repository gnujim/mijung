import React from 'react';
import styled from 'styled-components';

import { ResumeSkills } from '../components/resumeSkills';
import { ResumeProjects } from '../components/resumeProjects';
import { ResumeEducation } from '../components/resumeEducation';
import { ResumeEmployment } from '../components/resumeEmployment';

const ResumeBodyContainer = styled.div``;

export const ResumeBody = () => {
  return (
    <ResumeBodyContainer>
      <ResumeSkills />
      <ResumeProjects />
      <ResumeEducation />
      <ResumeEmployment />
    </ResumeBodyContainer>
  );
};
