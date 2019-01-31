import React from 'react';
import styled from 'styled-components';

import { ResumeSkill } from '../resume';

const ResumeSkillsContainer = styled.div`
  /* border: 1px dashed black; */
  padding-bottom: 10px;
  border-bottom: 1px dashed #e3b5a5;
  margin-bottom: 20px;
  @media print {
    border: none;
    margin: 0;
  }
`;

const Skills = styled.div`
  margin-bottom: 8px;
`;

const SkillsTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
  margin-bottom: 3px;
  @media print {
    font-size: 16px;
  }
`;

const SkillsList = styled.div`
  /* margin-bottom: 8px; */
`;

interface ResumeSkillsProps {
  skills: Array<ResumeSkill>;
}

export const ResumeSkills = (props: ResumeSkillsProps) => {
  const { skills } = props;
  return (
    <ResumeSkillsContainer>
      {skills.map((category, index) => {
        return (
          <Skills key={index}>
            <SkillsTitle>{category.title}</SkillsTitle>
            <SkillsList>{category.skills}</SkillsList>
          </Skills>
        );
      })}
    </ResumeSkillsContainer>
  );
};
