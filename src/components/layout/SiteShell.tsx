'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Packages', href: '/packages' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Library', href: '/library' },
  { name: 'Insights', href: '/insights' },
  { name: 'About', href: '/about' },
];

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-porcelain/95 backdrop-blur-sm border-b border-ink/10">
        <nav className="container mx-auto px-24 py-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-8">
            <div className="text-22 font-semibold text-ink">
              5Penny<span className="text-electric-violet">.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-32">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-14 text-ink hover:text-electric-violet transition-colors duration-normal"
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm">Book a Call</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-8 text-ink"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-24 h-24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-bone border-t border-ink/10">
            <div className="container mx-auto px-24 py-24 flex flex-col gap-16">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-16 text-ink hover:text-electric-violet transition-colors duration-normal py-8"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-16 border-t border-ink/10">
                <Button className="w-full">Book a Call</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-near-black text-porcelain">
        <div className="container mx-auto px-24 py-64">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-48">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="text-22 font-semibold mb-16">
                5Penny<span className="text-electric-violet">.</span>
              </div>
              <p className="text-14 text-steel max-w-md mb-24">
                Practical AI systems that pay for themselves. Fixed-scope, fixed-price,
                90-day payoff or we keep working.
              </p>
              <div className="flex flex-col gap-12">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="px-16 py-12 bg-near-black-variant border border-steel/30 rounded-8 text-14 text-porcelain placeholder:text-steel focus:outline-none focus:border-electric-violet focus:ring-2 focus:ring-electric-violet/20"
                />
                <Button size="sm" className="self-start">
                  Get Updates
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-14 font-semibold mb-16 text-porcelain">Quick Links</h3>
              <ul className="space-y-12">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-14 text-steel hover:text-electric-violet transition-colors duration-normal"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-14 font-semibold mb-16 text-porcelain">Contact</h3>
              <ul className="space-y-12 text-14 text-steel">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-electric-violet transition-colors duration-normal"
                  >
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:hello@5penny.ai"
                    className="hover:text-electric-violet transition-colors duration-normal"
                  >
                    hello@5penny.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-48 pt-24 border-t border-steel/20 flex flex-col md:flex-row justify-between items-center gap-16 text-12 text-steel">
            <p>&copy; {new Date().getFullYear()} 5Penny AI. All rights reserved.</p>
            <div className="flex gap-24">
              <Link
                href="/privacy"
                className="hover:text-electric-violet transition-colors duration-normal"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-electric-violet transition-colors duration-normal"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
