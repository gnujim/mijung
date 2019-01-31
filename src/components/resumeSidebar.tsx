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
import { ResumeEducation } from './resumeEducation';

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
  @media print {
    font-size: 14px;
    justify-content: flex-start;
    padding: 25px 15px 0px 15px;
  }
  @media (min-width: 577px) {
  }
  @media (min-width: 890px) {
  }
  @media (min-width: 1035px) {
  }
`;

const ResumeSidebarTop = styled.section`
  /* border: 1px dashed black; */
  @media (min-width: 577px) {
  }
  @media (min-width: 890px) {
  }
  @media (min-width: 1035px) {
  }
`;

const ResumeName = styled.div`
  color: #313131;
  font-family: 'Playfair Display', serif;
  font-size: 55px;
  line-height: 55px;
  font-weight: 700;
  margin-bottom: 20px;
  @media print {
    font-size: 45px;
    line-height: 45px;
  }
  @media (min-width: 577px) {
  }
  @media (min-width: 890px) {
  }
  @media (min-width: 1035px) {
  }
`;

const ResumeBio = styled.div`
  /* font-weight: 600; */
  margin: 25px 0;
  @media print {
    font-size: 14px;
    margin: 30px 0;
  }
  @media (min-width: 890px) {
    margin: 50px 0;
    font-size: 20px;
  }
`;

const ResumeSidebarBottom = styled.div`
  /* border: 1px dashed blue; */
  display: flex;
  @media print {
    align-items: flex-start;
    /* flex-grow: 1; */
  }
  @media screen and (min-width: 890px) {
    align-items: flex-end;
    flex-grow: 1;
  }
`;

const ResumeContact = styled.div`
  bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media print {
    flex-direction: column;
  }
  @media (min-width: 577px) {
  }
  @media screen and (min-width: 890px) {
    flex-direction: column;
    left: 0;
    position: sticky;
    right: 0;
    justify-content: initial;
  }
  @media (min-width: 1035px) {
  }
`;

const ResumeLink = styled.a`
  /* border: 1px dashed pink; */
  align-items: center;
  color: #444;
  display: flex;
  margin: 2px 0;
  text-decoration: none;
  &:nth-of-type(5) {
    width: 25px;
    height: 30px;
  }
  @media print {
    color: #313131;
  }
  @media (min-width: 577px) {
    &:visited {
      color: #444;
    }
  }
  @media (min-width: 890px) {
    &:hover {
      font-weight: 600;
    }
  }
  @media (min-width: 1035px) {
  }
`;

const ResumeIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  object-fit: contain;
  @media print {
    width: 15px;
    height: 16px;
  }
  @media (min-width: 577px) {
  }
  @media screen and (min-width: 890px) {
    width: 15px;
    height: 16px;
  }
  @media (min-width: 1035px) {
  }
`;

const ResumeContactText = styled.div`
  display: none;
  @media print {
    display: block;
  }
  @media (min-width: 577px) {
  }
  @media screen and (min-width: 815px) {
    display: block;
  }
  @media (min-width: 1035px) {
  }
`;

const ResumeContactLocation = styled.div`
  display: none;
  @media print {
  }
  @media (min-width: 577px) {
  }
  @media screen and (min-width: 890px) {
    display: block;
  }
  @media (min-width: 1035px) {
  }
`;

const ResumeSidebarPrintOnly = styled.div`
  display: none;
  @media print {
    display: block;
    margin-top: 60px;
  }
`;

const ResumeSectionTitle = styled.div`
  color: #313131;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 25px;
  font-size: 25px;
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

      <ResumeSidebarBottom>
        <ResumeContact>
          <ResumeLink href={`tel:${basics.phone}`}>
            <ResumeIcon src={phoneIcon} />
            <ResumeContactText>604.616.7795</ResumeContactText>
          </ResumeLink>
          <ResumeLink href={`mailto:${basics.email}`}>
            <ResumeIcon src={mailIcon} />
            <ResumeContactText>mijung.m@gmail.com</ResumeContactText>
          </ResumeLink>
          <ResumeLink href={basics.github} target="_blank">
            <ResumeIcon src={githubIcon} />
            <ResumeContactText>gnujim</ResumeContactText>
          </ResumeLink>
          <ResumeLink href={basics.linkedin} target="_blank">
            <ResumeIcon src={linkedinIcon} />
            <ResumeContactText>gnujim</ResumeContactText>
          </ResumeLink>
          <ResumeLink href="https://angel.co/mij" target="_blank">
            <ResumeIcon src={angelIcon} />
            <ResumeContactText>mij</ResumeContactText>
          </ResumeLink>
          <ResumeContactLocation>
            <ResumeIcon src={locationIcon} />
            {basics.location}
          </ResumeContactLocation>
        </ResumeContact>
      </ResumeSidebarBottom>

      <ResumeSidebarPrintOnly>
        <ResumeSectionTitle>Skills</ResumeSectionTitle>
        <ResumeSkills skills={skills} />
      </ResumeSidebarPrintOnly>
    </ResumeSidebarContainer>
  );
};
