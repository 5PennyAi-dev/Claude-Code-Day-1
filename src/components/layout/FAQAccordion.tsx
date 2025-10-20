'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  items: FAQItem[];
}

export function FAQAccordion({ title, items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-64 bg-porcelain">
      <div className="container mx-auto px-24">
        <div className="max-w-3xl mx-auto">
          {title && (
            <h2 className="text-36 md:text-48 font-semibold text-ink text-center mb-48">
              {title}
            </h2>
          )}

          <div className="space-y-16">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-bone rounded-12 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full px-24 py-20 flex justify-between items-center text-left hover:bg-bone/80 transition-colors duration-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet focus-visible:ring-inset"
                >
                  <span className="text-18 font-semibold text-ink pr-16">
                    {item.question}
                  </span>
                  <svg
                    className={`w-20 h-20 text-electric-violet flex-shrink-0 transition-transform duration-normal ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-normal ease-brand ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-24 pb-24 pt-8">
                    {/* Ledger Divider */}
                    <div className="ledger-divider mb-16">
                      <span></span>
                      <span></span>
                    </div>
                    <p className="text-16 text-steel leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
