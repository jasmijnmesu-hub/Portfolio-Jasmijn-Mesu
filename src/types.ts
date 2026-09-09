export type NavTab = 'home' | 'over-mij' | 'leeruitkomsten' | 'sprints' | 'bewijzen' | 'contact';

export interface LearningOutcome {
  id: 'LU1' | 'LU2' | 'LU3' | 'LU4' | 'LU5';
  code: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  targetCount: number; // Streefwaarde voor 'Boven Niveau'
  currentCount: number; // Aantal keren aangetoond
  keyCompetencies?: string[];
}

export type SprintStatus = 'afgerond' | 'bezig' | 'gepland';

export interface Sprint {
  id: number;
  title: string;
  period: string;
  showAndGrowDate: string;
  status: SprintStatus;
  statusText: string;
  focus: string;
  researched: string;
  created: string;
  learned: string;
  presentationUrl?: string;
  learningOutcomes: ('LU1' | 'LU2' | 'LU3' | 'LU4' | 'LU5')[];
  evidenceIds: string[];
}

export type EvidenceType = 'document' | 'video' | 'prototype' | 'spreadsheet' | 'presentatie';

export interface EvidenceItem {
  id: string;
  title: string;
  description: string;
  type: EvidenceType;
  platform: string; // e.g., 'OneDrive', 'YouTube', 'SharePoint', 'Canva'
  externalUrl: string;
  sprintId: number;
  learningOutcomes: ('LU1' | 'LU2' | 'LU3' | 'LU4' | 'LU5')[];
  date: string;
  isExample?: boolean;
}

export interface CoachInfo {
  name: string;
  role: string;
  institution: string;
}

export interface StudentProfile {
  name: string;
  age: number;
  study: string;
  institution: string;
  minor: string;
  minorPeriod: string;
  minorInstitute: string;
  email: string;
  linkedInUrl: string;
  logbookExcelUrl: string;
  photoUrl?: string;
  coaches: CoachInfo[];
}
