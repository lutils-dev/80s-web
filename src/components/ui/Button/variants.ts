import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium',
    'transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-brand-400 text-white',
          'hover:bg-brand-500',
          'dark:bg-brand-400 dark:hover:bg-brand-500',
          'focus:ring-brand-400/50',
        ],
        secondary: [
          'bg-surface-100 text-surface-900',
          'hover:bg-surface-200',
          'dark:bg-surface-800 dark:text-surface-50 dark:hover:bg-state-hover',
          'focus:ring-surface-500',
        ],
        outline: [
          'border border-brand-400 bg-transparent',
          'text-brand-400 hover:bg-brand-400/10',
          'dark:border-brand-400 dark:text-brand-400 dark:hover:bg-brand-400/10',
          'focus:ring-brand-400/50',
        ],
        ghost: [
          'text-brand-400 hover:bg-brand-400/10',
          'dark:text-brand-400 dark:hover:bg-brand-400/10',
          'focus:ring-brand-400/50',
        ],
        danger: [
          'bg-status-error-500 text-white',
          'hover:bg-status-error-700',
          'dark:bg-status-error-500 dark:hover:bg-status-error-700',
          'focus:ring-status-error-500/50',
        ],
        success: [
          'bg-status-success-500 text-white',
          'hover:bg-status-success-700',
          'dark:bg-status-success-500 dark:hover:bg-status-success-700',
          'focus:ring-status-success-500/50',
        ],
      },
      size: {
        sm: 'h-4 text-sm',
        md: 'h-5 text-sm',
        lg: 'h-6 text-sm',
        xl: 'h-7 text-sm',
      },
      iconOnly: {
        true: 'aspect-square p-0',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
      iconOnly: false,
      rounded: 'sm',
    },
  },
);
