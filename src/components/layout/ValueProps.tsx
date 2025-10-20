import React from 'react';

interface ValueProp {
  title: string;
  metric: string;
  description: string;
  icon?: React.ReactNode;
}

interface ValuePropsProps {
  title?: string;
  values: ValueProp[];
}

export function ValueProps({ title, values }: ValuePropsProps) {
  return (
    <section className="py-64 bg-porcelain">
      <div className="container mx-auto px-24">
        {title && (
          <h2 className="text-36 md:text-48 font-semibold text-ink text-center mb-48">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-bone rounded-12 p-32 shadow-sm hover:shadow-md transition-shadow duration-normal"
            >
              {/* Icon */}
              {value.icon && (
                <div className="mb-24 text-electric-violet">{value.icon}</div>
              )}

              {/* Metric */}
              <div className="text-48 font-semibold text-electric-violet mb-12 leading-tight">
                {value.metric}
              </div>

              {/* Title */}
              <h3 className="text-22 font-semibold text-ink mb-12">
                {value.title}
              </h3>

              {/* Ledger Divider */}
              <div className="ledger-divider mb-16">
                <span></span>
                <span></span>
              </div>

              {/* Description */}
              <p className="text-16 text-steel leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
