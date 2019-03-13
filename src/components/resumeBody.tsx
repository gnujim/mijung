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
  @media print {
    font-size: 14px;
    padding: 0px 5px 0px 15px;
    margin-top: 5px;
    /* margin-bottom: 20px; */
  }
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
  @media print {
    color: #313131;
    font-size: 21px;
    line-height: 21px;
    margin-bottom: 8px;
  }
`;

const ForScreenOnly = styled.div`
  @media print {
    display: none;
  }
`;

const ForPrintOnly = styled.div`
  display: none;
  @media print {
    display: block;
  }
`;

interface ResumeBodyProps {
  resume: Resume;
}

export const ResumeBody = (props: ResumeBodyProps) => {
  const { resume } = props;
  const { skills, projects, education, work } = resume;
  return (
    <ResumeBodyContainer>
      <ForScreenOnly>
        <ResumeSectionTitle>Skills</ResumeSectionTitle>
        <ResumeSkills skills={skills} />
        <ResumeSectionTitle>Projects</ResumeSectionTitle>
        <ResumeProjects projects={projects} />
        <ResumeSectionTitle>Education</ResumeSectionTitle>
        <ResumeEducation education={education} />
        <ResumeSectionTitle>Employment</ResumeSectionTitle>
        <ResumeEmployment work={work} />
      </ForScreenOnly>
      <ForPrintOnly>
        <ResumeSectionTitle>Employment</ResumeSectionTitle>
        <ResumeEmployment work={work} />
        <ResumeSectionTitle>Projects</ResumeSectionTitle>
        <ResumeProjects projects={projects} />
      </ForPrintOnly>
    </ResumeBodyContainer>
  );
};
