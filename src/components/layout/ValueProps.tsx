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
    <section className="py-1 bg-porcelain">
      <div className="container mx-auto px-6">
        {title && (
          <h2 className="text-4xl md:text-5xl font-semibold text-ink text-center mb-3">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-bone rounded-xl p-32 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon */}
              {value.icon && (
                <div className="mb-6 text-electric-violet">{value.icon}</div>
              )}

              {/* Metric */}
              <div className="text-5xl font-semibold text-electric-violet mb-3 leading-tight">
                {value.metric}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-ink mb-3">
                {value.title}
              </h3>

              {/* Ledger Divider */}
              <div className="ledger-divider mb-1">
                <span></span>
                <span></span>
              </div>

              {/* Description */}
              <p className="text-base text-steel leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
