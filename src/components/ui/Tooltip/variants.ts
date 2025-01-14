import { cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  [
    'absolute px-2 py-1',
    'text-sm text-white bg-surface-800 rounded',
    'opacity-0 invisible group-hover:opacity-100 group-hover:visible',
    'transition-all duration-200',
    'whitespace-nowrap',
    'pointer-events-none',
    'z-50',
  ],
  {
    variants: {
      placement: {
        top: [
          'bottom-full left-1/2 -translate-x-1/2 mb-2',
          'after:absolute after:top-full after:left-1/2 after:-translate-x-1/2',
          'after:border-4 after:border-transparent after:border-t-surface-800',
        ],
        bottom: [
          'top-full left-1/2 -translate-x-1/2 mt-2',
          'after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2',
          'after:border-4 after:border-transparent after:border-b-surface-800',
        ],
        left: [
          'right-full top-1/2 -translate-y-1/2 mr-2',
          'after:absolute after:left-full after:top-1/2 after:-translate-y-1/2',
          'after:border-4 after:border-transparent after:border-l-surface-800',
        ],
        right: [
          'left-full top-1/2 -translate-y-1/2 ml-2',
          'after:absolute after:right-full after:top-1/2 after:-translate-y-1/2',
          'after:border-4 after:border-transparent after:border-r-surface-800',
        ],
      },
      isVisible: {
        true: 'opacity-100 visible',
        false: 'opacity-0 invisible',
      },
    },
    defaultVariants: {
      placement: 'top',
    },
  },
);
