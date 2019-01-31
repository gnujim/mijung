import React from 'react';
import styled from 'styled-components';

import { ResumeProject } from '../resume';
import websiteIcon from '../../assets/my-icons-collection/png/worldwide.png';
import githubIcon from '../../assets/my-icons-collection/png/001-github.png';
import showcaseIcon from '../../assets/my-icons-collection/png/002-showcase.png';

const ResumeProjectsContainer = styled.div`
  /* border: 1px dashed black; */
  padding-bottom: 10px;
  border-bottom: 1px dashed #e3b5a5;
  margin-bottom: 20px;
  @media print {
    margin-bottom: 15px;
  }
`;

const Project = styled.div`
  margin-bottom: 8px;
  @media print {
    &:nth-of-type(7) {
      padding-bottom: 15px;
    }
    &:nth-of-type(8) {
      padding-top: 45px;
    }
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3px;
  @media print {
    flex-direction: row;
  }
  @media (min-width: 577px) {
  }
`;

const ProjectName = styled.div`
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
  @media print {
    font-size: 16px;
  }
`;

const ProjectSites = styled.div`
  display: flex;
`;

const ProjectLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  margin: 0 10px 3px 0;
  text-decoration: none;
  &:visited {
    color: inherit;
  }
  &:hover {
    color: inherit;
    font-weight: 600;
  }
`;

const SiteIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

const ProjectStack = styled.div`
  font-size: 16px;
  @media print {
    font-size: 14px;
  }
  @media (min-width: 577px) {
    font-size: 18px;
  }
`;

interface ResumeProjectsProps {
  projects: Array<ResumeProject>;
}

export const ResumeProjects = (props: ResumeProjectsProps) => {
  const { projects } = props;
  return (
    <ResumeProjectsContainer>
      {projects.map((project, index) => {
        return (
          <Project key={index}>
            <ProjectHeader>
              <ProjectName>{project.name}</ProjectName>
              <div>{project.releaseDate}</div>
            </ProjectHeader>
            <ProjectSites>
              {project.website && (
                <ProjectLink target="_blank" href={project.website}>
                  <SiteIcon src={websiteIcon} />
                  website
                </ProjectLink>
              )}
              {project.workUrl && (
                <ProjectLink target="_blank" href={project.workUrl}>
                  <SiteIcon src={showcaseIcon} />
                  showcase
                </ProjectLink>
              )}
              {project.githubUrl && (
                <ProjectLink target="_blank" href={project.githubUrl}>
                  <SiteIcon src={githubIcon} />
                  github
                </ProjectLink>
              )}
            </ProjectSites>
            <div>{project.summary}</div>
            <ProjectStack>{project.stack}</ProjectStack>
          </Project>
        );
      })}
    </ResumeProjectsContainer>
  );
};
