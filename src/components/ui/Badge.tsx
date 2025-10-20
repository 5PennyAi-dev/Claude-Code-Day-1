import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'industry' | 'category' | 'success' | 'alert';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'default', size = 'md' }: BadgeProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg whitespace-nowrap';

  const variantStyles = {
    default: 'bg-[#EDE9E4] text-[#1C232B] border border-ink/20',
    industry: 'bg-[#6A5BFF]/10 text-[#6A5BFF] border border-[#6A5BFF]/20',
    category: 'bg-steel/10 text-[#6C7A89] border border-steel/20',
    success: 'bg-[#00A77C]/10 text-[#00A77C] border border-jade/20',
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
