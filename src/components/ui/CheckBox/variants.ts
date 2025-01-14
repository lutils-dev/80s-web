import { cva } from 'class-variance-authority';

export const checkboxVariants = cva(
  [
    'flex h-4 w-4 items-center justify-center',
    'rounded border border-surface-300',
    'transition-colors duration-200',
    'dark:border-surface-600',
    'peer-focus:ring-2 peer-focus:ring-brand-400/50',
    'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed',
  ],
  {
    variants: {
      checked: {
        true: [
          'bg-brand-400 border-brand-400',
          'dark:bg-brand-400 dark:border-brand-400',
        ],
        false: [
          'bg-white hover:bg-surface-50',
          'dark:bg-surface-800 dark:hover:bg-surface-750',
        ],
      },
    },
    defaultVariants: {
      checked: false,
    },
  },
);
