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
    <section className="bg-porcelain py-64 md:py-96">
      <div className="container mx-auto px-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          {eyebrow && (
            <div className="inline-block mb-16">
              <span className="text-12 uppercase tracking-wide font-semibold text-steel">
                {eyebrow}
              </span>
            </div>
          )}

          {/* Headline */}
          <h1 className="text-48 md:text-64 font-semibold text-ink mb-24 leading-tight">
            {headline}
          </h1>

          {/* Lead */}
          <p className="text-18 md:text-22 text-steel mb-32 max-w-3xl mx-auto leading-relaxed">
            {lead}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-16 justify-center items-center mb-48">
            {ctaPrimary && (
              <Link
                href={ctaPrimary.href}
                className="inline-flex items-center justify-center font-medium rounded-12 transition-all duration-normal ease-brand focus-visible:outline-none focus-visible:ring-focus focus-visible:ring-electric-violet focus-visible:ring-offset-focus bg-electric-violet text-white hover:opacity-90 hover:shadow-md hover:-translate-y-px active:translate-y-0 px-32 py-16 text-18"
              >
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center font-medium rounded-12 transition-all duration-normal ease-brand focus-visible:outline-none focus-visible:ring-focus focus-visible:ring-electric-violet focus-visible:ring-offset-focus bg-bone text-ink border border-ink/20 hover:bg-bone/80 hover:border-ink/30 active:bg-bone/60 px-32 py-16 text-18"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </div>

          {/* Proof Badges */}
          {proofBadges && proofBadges.length > 0 && (
            <div className="flex flex-wrap justify-center gap-24 items-center">
              <span className="text-12 text-steel uppercase tracking-wide">Trusted by teams at</span>
              <div className="flex flex-wrap gap-32 justify-center">
                {proofBadges.map((badge, index) => (
                  <div
                    key={index}
                    className="px-16 py-8 bg-bone rounded-8 text-14 font-medium text-ink"
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
