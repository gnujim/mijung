import React from 'react';
import styled from 'styled-components';

import { Resume } from '../resume';
import { ResumeSkills } from '../components/resumeSkills';
import { ResumeProjects } from '../components/resumeProjects';
import { ResumeEducation } from '../components/resumeEducation';
import { ResumeEmployment } from '../components/resumeEmployment';

const ResumeBodyContainer = styled.div`
  margin-top: 10px;
  padding: 15px 5px 10px 5px;
  font-size: 18px;
  @media (min-width: 890px) {
    padding: 15px 15px 10px 15px;
    margin: 0;
  }
`;

const ResumeSectionTitle = styled.div`
  /* border: 1px dashed blue; */
  color: #444;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 15px;
`;

interface ResumeBodyProps {
  resume: Resume;
}

export const ResumeBody = (props: ResumeBodyProps) => {
  const { resume } = props;
  const { skills, projects, education, work } = resume;
  return (
    <ResumeBodyContainer>
      <ResumeSectionTitle>Skills</ResumeSectionTitle>
      <ResumeSkills skills={skills} />
      <ResumeSectionTitle>Projects</ResumeSectionTitle>
      <ResumeProjects projects={projects} />
      <ResumeSectionTitle>Education</ResumeSectionTitle>
      <ResumeEducation education={education} />
      <ResumeSectionTitle>Employment</ResumeSectionTitle>
      <ResumeEmployment work={work} />
    </ResumeBodyContainer>
  );
};
