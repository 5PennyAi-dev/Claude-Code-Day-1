import React from 'react';
import { Button } from '@/components/ui/Button';
import type { Package } from '@/data/packages';

interface PackageCardProps {
  package: Package;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div
      className={`bg-bone rounded-12 p-32 shadow-sm hover:shadow-md transition-shadow duration-normal flex flex-col ${
        pkg.featured ? 'ring-2 ring-electric-violet' : ''
      }`}
    >
      {/* Featured Badge */}
      {pkg.featured && (
        <div className="mb-16">
          <span className="inline-block px-12 py-4 bg-electric-violet text-white text-12 font-semibold uppercase tracking-wide rounded-8">
            Most Popular
          </span>
        </div>
      )}

      {/* Package Name */}
      <h3 className="text-28 font-semibold text-ink mb-12">
        {pkg.name}
      </h3>

      {/* Price */}
      <div className="mb-16">
        <span className="text-48 font-semibold text-ink">
          ${(pkg.price / 1000).toFixed(1)}k
        </span>
        <span className="text-16 text-steel ml-8">/ {pkg.timelineWeeks}</span>
      </div>

      {/* Acceptance Metric */}
      <div className="mb-24 p-16 bg-jade/10 rounded-8 border border-jade/20">
        <p className="text-14 text-ink">
          <span className="font-semibold">Success metric:</span> {pkg.acceptanceMetric}
        </p>
      </div>

      {/* Ledger Divider */}
      <div className="ledger-divider mb-24">
        <span></span>
        <span></span>
      </div>

      {/* Scope Checklist */}
      <div className="mb-24 flex-1">
        <h4 className="text-14 font-semibold text-ink uppercase tracking-wide mb-16">
          What's Included
        </h4>
        <ul className="space-y-12">
          {pkg.scopeChecklist.map((item, index) => (
            <li key={index} className="flex gap-12 text-14 text-steel">
              <svg
                className="w-16 h-16 text-jade flex-shrink-0 mt-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Deliverables */}
      <div className="mb-32">
        <h4 className="text-14 font-semibold text-ink uppercase tracking-wide mb-16">
          Deliverables
        </h4>
        <ul className="space-y-8">
          {pkg.deliverables.map((item, index) => (
            <li key={index} className="text-14 text-steel leading-relaxed">
              • {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Button className="w-full" size="lg">
        {pkg.ctaLabel}
      </Button>
    </div>
  );
}
