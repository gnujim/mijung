import React from 'react';
import styled from 'styled-components';

import { Resume } from '../resume';
import { ResumeSkills } from '../components/resumeSkills';
import githubIcon from '../../assets/my-icons-collection/png/001-github.png';
import linkedinIcon from '../../assets/my-icons-collection/png/linkedin.png';
import mailIcon from '../../assets/my-icons-collection/png/email.png';
import phoneIcon from '../../assets/my-icons-collection/png/phone.png';
import locationIcon from '../../assets/my-icons-collection/png/003-pin.png';
import angelIcon from '../../assets/AngelList_Black_Victory_Hand.png';

const ResumeSidebarContainer = styled.div`
  background-color: #fdfbf7;
  border: 1px dashed #e3b5a5;
  box-shadow: 8px 8px #e3b5a5;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  justify-content: space-between;
  padding: 20px 15px 30px 15px;
  position: relative;
`;

const ResumeSidebarTop = styled.section`
  /* border: 1px dashed black; */
`;

const ResumeName = styled.div`
  color: #313131;
  font-family: 'Playfair Display', serif;
  font-size: 55px;
  line-height: 55px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ResumeBio = styled.div`
  /* font-weight: 600; */
  margin: 50px 0;
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

const ResumeSidebarBottom = styled.div`
  align-items: flex-end;
  /* border: 1px dashed blue; */
  display: flex;
  flex-grow: 1;
`;

const ResumeContact = styled.div`
  bottom: 30px;
  display: flex;
  flex-direction: column;
  left: 0;
  position: sticky;
  right: 0;
  width: 100%;
`;

const ResumeLink = styled.a`
  /* border: 1px dashed pink; */
  align-items: center;
  color: #444;
  display: flex;
  margin: 2px 0;
  text-decoration: none;
  &:visited {
    color: #444;
  }
  &:hover {
    font-weight: 600;
  }
`;

const ResumeIcon = styled.img`
  width: 15px;
  height: 16px;
  margin-right: 10px;
`;

interface ResumeSidebarProps {
  resume: Resume;
}

export const ResumeSidebar = (props: ResumeSidebarProps) => {
  const { resume } = props;
  const { basics, skills } = resume;
  return (
    <ResumeSidebarContainer>
      <ResumeSidebarTop>
        <ResumeName>{basics.name}</ResumeName>
        <ResumeBio>{basics.summary}</ResumeBio>
      </ResumeSidebarTop>

      <ResumeSidebarMiddle>
        <ResumeSectionTitle>Skills</ResumeSectionTitle>
        <ResumeSkills skills={skills} />
      </ResumeSidebarMiddle>

      <ResumeSidebarBottom>
        <ResumeContact>
          <ResumeLink href={`tel:${basics.phone}`}>
            <ResumeIcon src={phoneIcon} />
            604.616.7795
          </ResumeLink>
          <ResumeLink href={`mailto:${basics.email}`}>
            <ResumeIcon src={mailIcon} />
            mijung.m@gmail.com
          </ResumeLink>
          <ResumeLink href={basics.github} target="_blank">
            <ResumeIcon src={githubIcon} />
            gnujim
          </ResumeLink>
          <ResumeLink href={basics.linkedin} target="_blank">
            <ResumeIcon src={linkedinIcon} />
            gnujim
          </ResumeLink>
          <ResumeLink href="https://angel.co/mij" target="_blank">
            <ResumeIcon style={{ width: '12px', marginRight: '13px' }} src={angelIcon} />
            mij
          </ResumeLink>
          <div>
            <ResumeIcon src={locationIcon} />
            {basics.location}
          </div>
        </ResumeContact>
      </ResumeSidebarBottom>
    </ResumeSidebarContainer>
  );
};
