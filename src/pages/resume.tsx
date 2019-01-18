import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import { Header } from '../components/header';

interface ResumeQueryData {
  data: {
    allContentfulJsonResume: {
      edges: Array<{
        node: {
          jsonResume: {
            skills: Array<{
              title: string;
              skills: string;
            }>;
            projects: Array<{
              name: string;
              summary: string;
              website: string;
              releaseDate: string;
            }>;
            education: Array<{
              area: string;
              date: string;
              institution: string;
            }>;
            work: Array<{
              company: string;
              summary: string;
              position: string;
              website: string;
              startDate: string;
              endDate: string;
            }>;
          };
        };
      }>;
    };
  };
}

export default () => (
  <>
    <Header />
    <Link to="/">Home</Link>
  </>
);
