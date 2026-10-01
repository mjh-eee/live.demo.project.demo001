'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold' | 'light' | 'dark' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  'aria-label'?: string;
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  'aria-label'?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-rose text-warm-white hover:bg-rose-dark border border-rose',
  secondary: 'bg-cream text-ink hover:bg-pearl border border-line',
  outline: 'bg-transparent text-ink border border-ink/15 hover:border-ink/40 hover:bg-ink/[0.02]',
  ghost: 'bg-transparent text-ink hover:bg-ink/[0.04] border border-transparent',
  gold: 'bg-gold text-ink hover:bg-gold-dark hover:text-cream border border-gold',
  light: 'bg-warm-white/10 text-warm-white border border-warm-white/25 hover:bg-warm-white/20 backdrop-blur-sm',
  dark: 'bg-ink text-warm-white hover:bg-charcoal border border-ink',
  icon: 'bg-transparent text-ink border border-ink/15 hover:border-ink/40 hover:bg-ink/[0.02]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4.5 text-sm',
  icon: 'h-8 w-8',
};

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose/30 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';

export const buttonVariants = cva(baseClass, {
  variants: {
    variant: variantClasses,
    size: sizeClasses,
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(baseClass, variantClasses[variant], sizeClasses[size], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      variant = 'primary',
      size = 'md',
      className,
      onClick,
      type = 'button',
      disabled,
      ...rest
    },
    ref
  ) {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(baseClass, variantClasses[variant], sizeClasses[size], className)}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
