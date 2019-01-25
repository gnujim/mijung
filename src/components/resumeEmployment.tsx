import React from 'react';
import styled from 'styled-components';

import { ResumeWork } from '../resume';

const ResumeEmploymentContainer = styled.div`
  /* border: 1px dashed black; */
  margin-bottom: 20px;
`;

const Workplace = styled.div`
  margin-bottom: 8px;
`;

const WorkplaceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
`;

const WorkplaceName = styled.div`
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
`;

const WorkPosition = styled.div`
  font-style: italic;
  margin-bottom: 3px;
`;

const WorkSummary = styled.div``;

interface ResumeEmploymentProps {
  work: Array<ResumeWork>;
}

export const ResumeEmployment = (props: ResumeEmploymentProps) => {
  const { work } = props;
  return (
    <ResumeEmploymentContainer>
      {work.map((Work, index) => {
        return (
          <Workplace key={index}>
            <WorkplaceHeader>
              <WorkplaceName>{Work.company}</WorkplaceName>
              <div>
                {Work.startDate} - {Work.endDate}
              </div>
            </WorkplaceHeader>
            <WorkPosition>{Work.position}</WorkPosition>
            <WorkSummary>{Work.summary}</WorkSummary>
          </Workplace>
        );
      })}
    </ResumeEmploymentContainer>
  );
};
