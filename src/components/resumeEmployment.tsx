import React from 'react';
import styled from 'styled-components';

import { ResumeWork } from '../resume';

const ResumeEmploymentContainer = styled.div``;

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
            <div>{workplace.company}</div>
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
