import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-medium rounded-12
      transition-all duration-normal ease-brand
      focus-visible:outline-none focus-visible:ring-focus focus-visible:ring-electric-violet focus-visible:ring-offset-focus
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variantStyles = {
      primary: `
        bg-electric-violet text-white
        hover:opacity-90 hover:shadow-md hover:-translate-y-px
        active:translate-y-0
      `,
      secondary: `
        bg-bone text-ink border border-ink/20
        hover:bg-bone/80 hover:border-ink/30
        active:bg-bone/60
      `,
    };

    const sizeStyles = {
      sm: 'px-16 py-8 text-14',
      md: 'px-24 py-12 text-16',
      lg: 'px-32 py-16 text-18',
    };

    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
