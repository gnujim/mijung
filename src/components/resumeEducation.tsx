import React from 'react';
import styled from 'styled-components';

import { ResumeSchool } from '../resume';

const ResumeEducationContainer = styled.div`
  /* border: 1px dashed black; */
  padding-bottom: 10px;
  border-bottom: 1px dashed #e3b5a5;
  margin-bottom: 20px;
`;

const School = styled.div`
  margin-bottom: 8px;
`;

const SchoolHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  flex-direction: column;
  @media (min-width: 577px) {
    flex-direction: row;
  }
`;

const SchoolName = styled.div`
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
  /* margin-bottom: 15px; */
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
          <School key={index}>
            <SchoolHeader>
              <SchoolName>{school.institution}</SchoolName>
              <div>{school.date}</div>
            </SchoolHeader>
            <div>{school.area}</div>
          </School>
        );
      })}
    </ResumeEducationContainer>
  );
};
