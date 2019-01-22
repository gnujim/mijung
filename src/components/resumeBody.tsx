import React from 'react';
import styled from 'styled-components';

import { ResumeSkills } from '../components/resumeSkills';
import { ResumeProjects } from '../components/resumeProjects';
import { ResumeEducation } from '../components/resumeEducation';
import { ResumeEmployment } from '../components/resumeEmployment';

const ResumeBodyContainer = styled.div``;

const ResumeSectionTitle = styled.div`
  color: #444;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 15px;
`;

export const ResumeBody = () => {
  return (
    <ResumeBodyContainer>
      <ResumeSectionTitle>Skills</ResumeSectionTitle>
      <ResumeSkills />
      <ResumeSectionTitle>Projects</ResumeSectionTitle>
      <ResumeProjects />
      <ResumeSectionTitle>Education</ResumeSectionTitle>
      <ResumeEducation />
      <ResumeSectionTitle>Employment</ResumeSectionTitle>
      <ResumeEmployment />
    </ResumeBodyContainer>
  );
};
