import React from 'react';
import styled from 'styled-components';

import { ResumeWork } from '../resume';

const ResumeEmploymentContainer = styled.div``;

const CompanyName = styled.div`
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
`;

interface ResumeEmploymentProps {
  work: Array<ResumeWork>;
}

export const ResumeEmployment = (props: ResumeEmploymentProps) => {
  const { work } = props;
  return (
    <ResumeEmploymentContainer>
      {work.map((workplace, index) => {
        return (
          <div key={index}>
            <CompanyName>{workplace.company}</CompanyName>
            <div>{workplace.summary}</div>
            <div>{workplace.position}</div>
            <div>{workplace.website}</div>
            <div>{workplace.startDate}</div>
            <div>{workplace.endDate}</div>
          </div>
        );
      })}
    </ResumeEmploymentContainer>
  );
};
