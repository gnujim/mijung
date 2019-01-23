import React from 'react';
import styled from 'styled-components';

import { ResumeBasics } from '../resume';

const ResumeSidebarContainer = styled.div`
  background-color: #fdfbf7;
  border: 1px dashed #e3b5a5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 10px;
`;

const ResumeSidebarTop = styled.section``;

const ResumeName = styled.div`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #313131;
  font-size: 55px;
`;

const ResumeBio = styled.div``;

const ResumeSidebarBottom = styled.section`
  display: flex;
  flex-direction: column;
`;

const ResumeLink = styled.a`
  color: #444;
  text-decoration: none;
`;

const ResumeIcon = styled.img``;

interface ResumeSidebarProps {
  basics: ResumeBasics;
  aboutText: string;
}

export const ResumeSidebar = (props: ResumeSidebarProps) => {
  const { basics, aboutText } = props;
  return (
    <ResumeSidebarContainer>
      <ResumeSidebarTop>
        <ResumeName>{basics.name}</ResumeName>
        <ResumeBio>{aboutText}</ResumeBio>
      </ResumeSidebarTop>
      <ResumeSidebarBottom>
        <div>{basics.location}</div>
        <ResumeLink href={`tel:${basics.phone}`}>phone</ResumeLink>
        <ResumeLink href={`mailto:${basics.email}`}>email</ResumeLink>
        <ResumeLink href={basics.github} target="_blank">
          github
        </ResumeLink>
        <ResumeLink href={basics.linkedin} target="_blank">
          linkedin
        </ResumeLink>
        <ResumeLink href="#" target="_blank">
          angel.co?
        </ResumeLink>
      </ResumeSidebarBottom>
    </ResumeSidebarContainer>
  );
};
