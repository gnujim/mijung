export interface Resume {
  basics: ResumeBasics;
  skills: Array<ResumeSkill>;
  projects: Array<ResumeProject>;
  education: Array<ResumeSchool>;
  work: Array<ResumeWork>;
}

export interface ResumeBasics {
  name: string;
  email: string;
  phone: string;
  github: string;
  summary: string;
  linkedin: string;
  location: string;
}

export interface ResumeSkill {
  title: string;
  skills: string;
}

export interface ResumeProject {
  name: string;
  releaseDate: string;
  summary: string;
  website?: string;
  workUrl?: string;
  githubUrl?: string;
  stack: string;
}

export interface ResumeSchool {
  area: string;
  date: string;
  institution: string;
}

export interface ResumeWork {
  company: string;
  summary: string;
  position: string;
  website?: string;
  startDate: string;
  endDate: string;
}
