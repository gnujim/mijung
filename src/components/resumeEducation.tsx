import React from 'react';
import styled from 'styled-components';

import { ResumeSchool } from '../resume';

const ResumeEducationContainer = styled.div``;

const SchoolName = styled.div`
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
`;

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
            <SchoolName>{school.institution}</SchoolName>
            <div>{school.area}</div>
            <div>{school.date}</div>
          </div>
        );
      })}
    </ResumeEducationContainer>
  );
};
