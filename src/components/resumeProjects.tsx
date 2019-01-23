import React from 'react';
import styled from 'styled-components';

import { ResumeProject } from '../resume';

const ResumeProjectsContainer = styled.div``;

const ProjectName = styled.div`
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
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
          <div key={index}>
            <ProjectName>{project.name}</ProjectName>
            <div>{project.summary}</div>
            <div>{project.website}</div>
            <div>{project.releaseDate}</div>
          </div>
        );
      })}
    </ResumeProjectsContainer>
  );
};
