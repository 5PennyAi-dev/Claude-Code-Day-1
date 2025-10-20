export interface Metric {
  label: string;
  value: string;
  unit: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  slug: string;
  industry: string;
  summary: string;
  baselineMetric: Metric;
  afterMetric: Metric;
  steps: Step[];
  coverImage?: string;
  takeaway: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'Manufacturing Compliance Checklist Automation',
    slug: 'manufacturing-compliance',
    industry: 'Manufacturing',
    summary: 'A 45-person precision parts manufacturer was spending 6+ hours per week manually filling compliance checklists for customer audits.',
    baselineMetric: {
      label: 'Weekly time on checklists',
      value: '6',
      unit: 'hours',
    },
    afterMetric: {
      label: 'Weekly time on checklists',
      value: '45',
      unit: 'minutes',
    },
    steps: [
      {
        title: 'Audit existing process',
        description: 'Mapped 3 different checklist formats used by key customers. Identified 80% overlap in required data points.',
      },
      {
        title: 'Build prompt engine',
        description: 'Created structured prompts that pull from internal quality logs and generate first-draft responses.',
      },
      {
        title: 'Human-in-loop review',
        description: 'Quality manager reviews AI-generated responses, makes corrections, and approves final output.',
      },
      {
        title: 'Iterate based on feedback',
        description: 'Tuned prompts over 3 weeks based on correction patterns. Accuracy improved from 70% to 92%.',
      },
    ],
    takeaway: 'Same-day turnaround on customer audits, zero compliance issues in 90 days post-launch.',
  },
  {
    title: 'Agency Client Onboarding Assistant',
    slug: 'agency-onboarding',
    industry: 'Marketing Agency',
    summary: 'A 15-person creative agency was losing 4-5 hours per new client on intake forms, brand questionnaires, and project briefs.',
    baselineMetric: {
      label: 'Time per client onboarding',
      value: '4.5',
      unit: 'hours',
    },
    afterMetric: {
      label: 'Time per client onboarding',
      value: '1',
      unit: 'hour',
    },
    steps: [
      {
        title: 'Standardize intake questions',
        description: 'Consolidated 5 different intake forms into a single structured questionnaire.',
      },
      {
        title: 'Build AI intake assistant',
        description: 'Created conversational form that asks smart follow-ups and generates project brief draft.',
      },
      {
        title: 'Auto-populate project docs',
        description: 'AI assistant extracts key info and pre-fills Notion project template with client details.',
      },
      {
        title: 'Account manager review',
        description: 'AM reviews brief, makes final edits, and schedules kickoff call with 75% less prep work.',
      },
    ],
    takeaway: 'Onboarding capacity increased by 3x without adding headcount. Client satisfaction scores up 18%.',
  },
];
