import { LucideIcon } from 'lucide-react';

export interface SubStep {
  title: string;
  description: string[];
}

export interface SystemStep {
  title: string;
  problem: string;
  stack: string[];
  subSteps: SubStep[];
  outcome: string;
  time: string;
}

export interface SystemData {
  id: string;
  emoji: string;
  name: string;
  whatItDoes: string;
  included: string[];
  whyMatters: string;
  successLooksLike: string[];
  timeSaved: string;
  impact?: string;
  guideLink: string;
  steps?: SystemStep[];
  totalBuildTime?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  category: 'start' | 'build' | 'resources';
}

export interface AssessmentQuestion {
  id: number;
  label: string;
  options: {
    label: string;
    value: string;
  }[];
}

export interface AssessmentResult {
  title: string;
  body: string;
  priority: string;
}

export interface Phase {
  num: number;
  title: string;
  sub: string;
  milestones: {
    text: string;
    meta: string;
  }[];
}

export interface ChecklistSection {
  id: string;
  title: string;
  items: {
    id: string;
    text: string;
  }[];
}