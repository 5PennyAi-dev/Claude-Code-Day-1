import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'industry' | 'category' | 'success' | 'alert';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'default', size = 'md' }: BadgeProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg whitespace-nowrap';

  const variantStyles = {
    default: 'bg-bone text-ink border border-ink/20',
    industry: 'bg-electric-violet/10 text-electric-violet border border-electric-violet/20',
    category: 'bg-steel/10 text-steel border border-steel/20',
    success: 'bg-jade/10 text-jade border border-jade/20',
    alert: 'bg-persimmon/10 text-persimmon border border-persimmon/20',
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-6 text-sm',
  };

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
  `.trim().replace(/\s+/g, ' ');

  return (
    <span className={combinedClassName}>
      {children}
    </span>
  );
}
