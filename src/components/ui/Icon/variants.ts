import { cva } from 'class-variance-authority';

export const iconVariants = cva('', {
  variants: {
    size: {
      sm: 'w-3.5 h-3.5',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
      xl: 'w-6 h-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
