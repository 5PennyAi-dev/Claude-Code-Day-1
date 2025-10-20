export interface Package {
  name: string;
  slug: string;
  price: number;
  timelineWeeks: string;
  acceptanceMetric: string;
  scopeChecklist: string[];
  deliverables: string[];
  ctaLabel: string;
  featured: boolean;
}

export const packages: Package[] = [
  {
    name: 'Prompt Engine + SOP Kit',
    slug: 'starter',
    price: 3500,
    timelineWeeks: '2 weeks',
    acceptanceMetric: 'Task completion time cut by 40% or more',
    scopeChecklist: [
      'Audit 1-2 repetitive workflows',
      'Design prompt library (3-5 core prompts)',
      'Create lightweight SOP documentation',
      'Train team on prompt usage',
      '2 weeks of post-launch Slack support',
    ],
    deliverables: [
      'Custom prompt library in Notion or Google Docs',
      'Usage guide with examples',
      'SOP templates for key workflows',
      'Team training session (60 min)',
    ],
    ctaLabel: 'Get Started',
    featured: false,
  },
  {
    name: 'AI Assistant in the Loop',
    slug: 'standard',
    price: 9000,
    timelineWeeks: '3-4 weeks',
    acceptanceMetric: 'Human review time reduced by 50%+',
    scopeChecklist: [
      'Identify workflow bottleneck (manual review, data entry, etc)',
      'Build lightweight AI assistant (API integration or no-code tool)',
      'Human-in-the-loop validation workflow',
      'Error handling and fallback logic',
      '4 weeks of monitoring and tuning',
    ],
    deliverables: [
      'Working AI assistant (Make.com, Zapier, or custom script)',
      'Documentation and usage guide',
      'Team training (90 min)',
      'Error log and performance dashboard',
    ],
    ctaLabel: 'Book a Call',
    featured: true,
  },
  {
    name: 'Mini Internal Tool',
    slug: 'pro',
    price: 15000,
    timelineWeeks: '4-5 weeks',
    acceptanceMetric: 'Full automation of targeted workflow',
    scopeChecklist: [
      'Design custom internal tool or dashboard',
      'Integrate with existing systems (CRM, inventory, etc)',
      'Build simple UI for team access',
      'Deploy and secure (authentication, permissions)',
      '6 weeks of maintenance and updates',
    ],
    deliverables: [
      'Custom web application or dashboard',
      'Integration with 1-2 business systems',
      'User authentication and role management',
      'Technical documentation',
      'Team training (2 hours)',
    ],
    ctaLabel: 'Schedule Consultation',
    featured: false,
  },
];
