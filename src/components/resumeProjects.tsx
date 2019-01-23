import React from 'react';
import styled from 'styled-components';

import { ResumeProject } from '../resume';

const ResumeProjectsContainer = styled.div``;

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
            <div>{project.name}</div>
            <div>{project.summary}</div>
            <div>{project.website}</div>
            <div>{project.releaseDate}</div>
          </div>
        );
      })}
    </ResumeProjectsContainer>
  );
};
