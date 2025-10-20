import { HeroSplit } from '@/components/layout/HeroSplit';
import { ValueProps } from '@/components/layout/ValueProps';
import { PackageCard } from '@/components/layout/PackageCard';
import { FAQAccordion } from '@/components/layout/FAQAccordion';
import { Button } from '@/components/ui/Button';
import { packages } from '@/data/packages';

const valuePropositions = [
  {
    title: 'Time Saved',
    metric: '4.5hrs',
    description:
      'Average weekly hours saved per team member after implementing our AI systems. That is 234 hours per year per person.',
  },
  {
    title: 'Error Rate Down',
    metric: '87%',
    description:
      'Reduction in manual data entry errors and missed follow-ups. AI handles repetitive tasks with consistent accuracy.',
  },
  {
    title: 'Revenue Recovered',
    metric: '$12k',
    description:
      'Average monthly revenue captured from previously missed opportunities, automated follow-ups, and faster response times.',
  },
];

const faqItems = [
  {
    question: 'How long does implementation take?',
    answer:
      'Most packages are delivered in 2-5 weeks depending on complexity. We start with a quick audit call, design the solution in the first week, build and test in weeks 2-3, and deploy with training in the final week. You will see measurable results within 90 days or we keep working.',
  },
  {
    question: 'Do I need technical expertise on my team?',
    answer:
      'No technical expertise required. We build systems that your team can use and maintain with simple documentation and training. Most solutions use no-code tools like Make.com or Zapier, or we provide a simple interface if custom code is needed. We handle all technical setup and provide ongoing support.',
  },
  {
    question: 'What if the AI system does not deliver the promised ROI?',
    answer:
      'We guarantee 90-day payoff or we keep working at no additional cost. Every package includes a clear acceptance metric (like "task completion time cut by 40%"). If we do not hit that metric within 90 days, we will continue tuning and improving the system until we do. Fixed price, guaranteed outcome.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSplit
        eyebrow="AI Consulting for SMBs"
        headline="Practical AI that pays for itself"
        lead="We design and ship small, durable AI systems that save teams hours every week. Fixed-scope, fixed-price, 90-day payoff or we keep working."
        ctaPrimary={{
          label: 'Book a 20-min fit call',
          href: '/contact',
        }}
        ctaSecondary={{
          label: 'View packages',
          href: '/packages',
        }}
        proofBadges={['Manufacturing', 'Agencies', 'Retail Ops']}
      />

      {/* Value Propositions */}
      <ValueProps title="Measurable outcomes in 90 days" values={valuePropositions} />

      {/* Featured Packages */}
      <section className="py-1 bg-[#EDE9E4]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-3">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1C232B] mb-1">
              Fixed-scope packages
            </h2>
            <p className="text-lg text-[#6C7A89] max-w-2xl mx-auto">
              Choose the package that fits your needs. All include clear acceptance metrics
              and 90-day ROI guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} package={pkg} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="secondary">
              View all packages →
            </Button>
          </div>
        </div>
      </section>

      {/* Library CTA Section */}
      <section className="py-1 bg-[#F4F6F8]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-[#EDE9E4] rounded-2xl p-48 shadow-md text-center">
            <h2 className="text-4xl font-semibold text-[#1C232B] mb-1">
              Get the prompt library
            </h2>
            <p className="text-lg text-[#6C7A89] mb-2">
              Download our collection of battle-tested prompts and templates. See exactly
              how we structure AI workflows for real business problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-1 py-3 bg-white border border-ink/20 rounded-lg text-base placeholder:text-[#6C7A89] focus:outline-none focus:border-[#6A5BFF] focus:ring-2 focus:ring-[#6A5BFF]/20 w-full sm:w-80"
              />
              <Button size="lg">Download Free</Button>
            </div>
            <p className="text-xs text-[#6C7A89] mt-1">
              No spam. Unsubscribe anytime. 5 prompts + usage guide.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-1 bg-[#EDE9E4]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-3">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1C232B] mb-1">
              Real results from real teams
            </h2>
            <p className="text-lg text-[#6C7A89] max-w-2xl mx-auto">
              See how we helped SMBs save time, reduce errors, and capture revenue with
              practical AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
            {/* Case Study Card 1 */}
            <div className="bg-[#F4F6F8] rounded-xl p-32 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center gap-3 mb-1">
                <span className="px-3 py-1 bg-[#6A5BFF]/10 text-[#6A5BFF] text-xs font-semibold rounded-lg border border-[#6A5BFF]/20">
                  Manufacturing
                </span>
                <span className="text-xs text-[#6C7A89]">90-sec read</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#1C232B] mb-1">
                Compliance Checklist Automation
              </h3>
              <div className="flex items-baseline gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-semibold text-[#6C7A89]">6hrs</div>
                  <div className="text-xs text-[#6C7A89]">Before</div>
                </div>
                <svg className="w-32 h-4 text-[#6A5BFF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-[#00A77C]">45min</div>
                  <div className="text-xs text-[#6C7A89]">After</div>
                </div>
              </div>
              <p className="text-sm text-[#6C7A89] mb-6 leading-relaxed">
                45-person manufacturer cut weekly compliance checklist time by 87%. Same-day turnaround, zero issues in 90 days.
              </p>
              <Button variant="secondary" size="sm">
                Read case study →
              </Button>
            </div>

            {/* Case Study Card 2 */}
            <div className="bg-[#F4F6F8] rounded-xl p-32 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center gap-3 mb-1">
                <span className="px-3 py-1 bg-[#6A5BFF]/10 text-[#6A5BFF] text-xs font-semibold rounded-lg border border-[#6A5BFF]/20">
                  Marketing Agency
                </span>
                <span className="text-xs text-[#6C7A89]">90-sec read</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#1C232B] mb-1">
                Client Onboarding Assistant
              </h3>
              <div className="flex items-baseline gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-semibold text-[#6C7A89]">4.5hrs</div>
                  <div className="text-xs text-[#6C7A89]">Before</div>
                </div>
                <svg className="w-32 h-4 text-[#6A5BFF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-[#00A77C]">1hr</div>
                  <div className="text-xs text-[#6C7A89]">After</div>
                </div>
              </div>
              <p className="text-sm text-[#6C7A89] mb-6 leading-relaxed">
                15-person agency increased onboarding capacity 3x without adding headcount. Client satisfaction up 18%.
              </p>
              <Button variant="secondary" size="sm">
                Read case study →
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="secondary">
              View all case studies →
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion title="Common questions" items={faqItems} />
    </>
  );
}
