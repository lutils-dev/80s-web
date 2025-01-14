import { cva } from 'class-variance-authority';

export const logoVariants = cva('w-auto', {
  variants: {
    size: {
      sm: 'h-6',
      md: 'h-8',
      lg: 'h-12',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
