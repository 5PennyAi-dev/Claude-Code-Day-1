'use client';

import React from 'react';
import Link from 'next/link';

interface HeroSplitProps {
  eyebrow?: string;
  headline: string;
  lead: string;
  ctaPrimary?: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
  proofBadges?: string[];
}

export function HeroSplit({
  eyebrow,
  headline,
  lead,
  ctaPrimary,
  ctaSecondary,
  proofBadges,
}: HeroSplitProps) {
  return (
    <section className="bg-porcelain py-1 md:py-6">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          {eyebrow && (
            <div className="inline-block mb-1">
              <span className="text-xs uppercase tracking-wide font-semibold text-steel">
                {eyebrow}
              </span>
            </div>
          )}

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-semibold text-ink mb-6 leading-tight">
            {headline}
          </h1>

          {/* Lead */}
          <p className="text-lg md:text-2xl text-steel mb-2 max-w-3xl mx-auto leading-relaxed">
            {lead}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3">
            {ctaPrimary && (
              <Link
                href={ctaPrimary.href}
                className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet focus-visible:ring-offset-4 bg-electric-violet text-white hover:opacity-90 hover:shadow-md hover:-translate-y-px active:translate-y-0 px-2 py-1 text-lg"
              >
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet focus-visible:ring-offset-4 bg-bone text-ink border border-ink/20 hover:bg-bone/80 hover:border-ink/30 active:bg-bone/60 px-2 py-1 text-lg"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </div>

          {/* Proof Badges */}
          {proofBadges && proofBadges.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <span className="text-xs text-steel uppercase tracking-wide">Trusted by teams at</span>
              <div className="flex flex-wrap gap-2 justify-center">
                {proofBadges.map((badge, index) => (
                  <div
                    key={index}
                    className="px-1 py-2 bg-bone rounded-lg text-sm font-medium text-ink"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
