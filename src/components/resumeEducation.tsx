import React from 'react';
import styled from 'styled-components';

import { ResumeSchool } from '../resume';

const ResumeEducationContainer = styled.div``;

interface ResumeEducationProps {
  education: Array<ResumeSchool>;
}

export const ResumeEducation = (props: ResumeEducationProps) => {
  const { education } = props;
  return (
    <ResumeEducationContainer>
      {education.map((school, index) => {
        return (
          <div key={index}>
            <div>{school.area}</div>
            <div>{school.date}</div>
            <div>{school.institution}</div>
          </div>
        );
      })}
    </ResumeEducationContainer>
  );
};
