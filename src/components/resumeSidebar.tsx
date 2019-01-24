import React from 'react';
import styled from 'styled-components';

import { Resume } from '../resume';
import { ResumeSkills } from '../components/resumeSkills';

const ResumeSidebarContainer = styled.div`
  background-color: #fdfbf7;
  border: 1px dashed #e3b5a5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px;
`;

const ResumeSidebarTop = styled.section`
  border: 1px dashed black;
`;

const ResumeName = styled.div`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #313131;
  font-size: 55px;
`;

// CHANGE THIS FOR PDF MEDIA QUERY
const ResumeSidebarMiddle = styled.div`
  border: 1px dashed black;
  display: none;
  @media (min-width: 577px) {
  }
  @media (min-width: 890px) {
  }
  @media (min-width: 1035px) {
  }
`;

const ResumeSectionTitle = styled.div`
  color: #444;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 15px;
`;

const ResumeBio = styled.div``;

const ResumeSidebarBottom = styled.section`
  border: 1px dashed black;
  display: flex;
  flex-direction: column;
`;

const ResumeLink = styled.a`
  color: #444;
  text-decoration: none;
`;

const ResumeIcon = styled.img``;

interface ResumeSidebarProps {
  resume: Resume;
  aboutText: string;
}

export const ResumeSidebar = (props: ResumeSidebarProps) => {
  const { resume, aboutText } = props;
  const { basics, skills } = resume;
  return (
    <ResumeSidebarContainer>
      <ResumeSidebarTop>
        <ResumeName>{basics.name}</ResumeName>
        <ResumeBio>{aboutText}</ResumeBio>
      </ResumeSidebarTop>
      <ResumeSidebarMiddle>
        <ResumeSectionTitle>Skills</ResumeSectionTitle>
        <ResumeSkills skills={skills} />
      </ResumeSidebarMiddle>
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
