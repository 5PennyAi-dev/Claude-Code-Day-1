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
    <section className="py-1 bg-[#F4F6F8]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {title && (
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1C232B] text-center mb-3">
              {title}
            </h2>
          )}

          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-[#EDE9E4] rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-20 flex justify-between items-center text-left hover:bg-[#EDE9E4]/80 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6A5BFF] focus-visible:ring-inset"
                >
                  <span className="text-lg font-semibold text-[#1C232B] pr-16">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#6A5BFF] flex-shrink-0 transition-transform duration-200 ${
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
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-8">
                    {/* Ledger Divider */}
                    <div className="ledger-divider mb-1">
                      <span></span>
                      <span></span>
                    </div>
                    <p className="text-base text-[#6C7A89] leading-relaxed">
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
