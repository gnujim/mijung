import React from 'react';
import styled from 'styled-components';

import { ResumeSkill } from '../resume';

const ResumeSkillsContainer = styled.div``;

const SkillsTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
`;

const SkillsList = styled.div``;

interface ResumeSkillsProps {
  skills: Array<ResumeSkill>;
}

export const ResumeSkills = (props: ResumeSkillsProps) => {
  const { skills } = props;
  return (
    <ResumeSkillsContainer>
      {skills.map((category, index) => {
        return (
          <div key={index}>
            <SkillsTitle>{category.title}</SkillsTitle>
            <SkillsList>{category.skills}</SkillsList>
          </div>
        );
      })}
    </ResumeSkillsContainer>
  );
};
