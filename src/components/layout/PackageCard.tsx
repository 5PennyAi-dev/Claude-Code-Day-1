import React from 'react';
import { Button } from '@/components/ui/Button';
import type { Package } from '@/data/packages';

interface PackageCardProps {
  package: Package;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div
      className={`bg-bone rounded-xl p-32 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col ${
        pkg.featured ? 'ring-2 ring-electric-violet' : ''
      }`}
    >
      {/* Featured Badge */}
      {pkg.featured && (
        <div className="mb-1">
          <span className="inline-block px-3 py-1 bg-electric-violet text-white text-xs font-semibold uppercase tracking-wide rounded-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Package Name */}
      <h3 className="text-3xl font-semibold text-ink mb-3">
        {pkg.name}
      </h3>

      {/* Price */}
      <div className="mb-1">
        <span className="text-5xl font-semibold text-ink">
          ${(pkg.price / 1000).toFixed(1)}k
        </span>
        <span className="text-base text-steel ml-8">/ {pkg.timelineWeeks}</span>
      </div>

      {/* Acceptance Metric */}
      <div className="mb-6 p-16 bg-jade/10 rounded-lg border border-jade/20">
        <p className="text-sm text-ink">
          <span className="font-semibold">Success metric:</span> {pkg.acceptanceMetric}
        </p>
      </div>

      {/* Ledger Divider */}
      <div className="ledger-divider mb-6">
        <span></span>
        <span></span>
      </div>

      {/* Scope Checklist */}
      <div className="mb-6 flex-1">
        <h4 className="text-sm font-semibold text-ink uppercase tracking-wide mb-1">
          What's Included
        </h4>
        <ul className="space-y-3">
          {pkg.scopeChecklist.map((item, index) => (
            <li key={index} className="flex gap-3 text-sm text-steel">
              <svg
                className="w-4 h-4 text-jade flex-shrink-0 mt-1"
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
      <div className="mb-2">
        <h4 className="text-sm font-semibold text-ink uppercase tracking-wide mb-1">
          Deliverables
        </h4>
        <ul className="space-y-2">
          {pkg.deliverables.map((item, index) => (
            <li key={index} className="text-sm text-steel leading-relaxed">
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
