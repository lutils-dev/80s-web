import { cva } from 'class-variance-authority';

export const textVariants = cva('transition-colors', {
  variants: {
    intent: {
      primary: 'text-zinc-900 dark:text-zinc-300',
      secondary: 'text-zinc-600 dark:text-zinc-400',
      tertiary: 'text-zinc-500 dark:text-zinc-500',
      disabled: 'text-zinc-400 dark:text-zinc-600',
    },
    size: {
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-sm',
    },
    weight: {
      normal: 'font-normal',
      md: 'font-medium',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
    weight: 'normal',
  },
});
