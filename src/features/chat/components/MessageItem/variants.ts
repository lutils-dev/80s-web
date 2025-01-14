import { cva } from 'class-variance-authority';

export const messageItemVariants = cva('', {
  variants: {
    role: {
      user: 'ml-auto',
      assistant: '',
    },
  },
  defaultVariants: {
    role: 'user',
  },
});
