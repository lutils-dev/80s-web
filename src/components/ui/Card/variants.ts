import { cva } from 'class-variance-authority';

export const cardVariants = cva('transition-colors', {
  variants: {
    background: {
      // Main surfaces
      white: 'bg-surface-50 dark:bg-surface-700', // Lightest
      light: 'bg-surface-100 dark:bg-surface-750', // Very light
      medium: 'bg-surface-150 dark:bg-surface-800', // Medium light
      dark: 'bg-surface-300 dark:bg-surface-900', // Darker

      // Additional variations
      subtle: 'bg-surface-50/50 dark:bg-surface-700/50',
      hover: 'hover:bg-surface-100 dark:hover:bg-surface-750',
      active: 'bg-surface-200 dark:bg-surface-800',

      // Special uses
      transparent: 'bg-transparent',
      overlay: 'bg-surface-50/90 dark:bg-surface-700/90 backdrop-blur-sm',
      contrast: 'bg-surface-950 dark:bg-surface-50', // Intentionally inverted
    },
    interactive: {
      hover: 'hover:bg-surface-100 dark:hover:bg-state-hover',
      active: 'active:bg-surface-200 dark:active:bg-state-active',
      selected: 'bg-surface-200 dark:bg-state-selected',
    },

    size: {
      none: 'p-0',
      xs: 'p-1',
      sm: 'p-2',
      md: 'p-3',
      lg: 'p-4',
      xl: 'p-5',
    },

    rounded: {
      none: 'rounded-none',
      xs: 'rounded',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
    },

    shadow: {
      none: 'shadow-none',
      xs: 'shadow-sm',
      sm: 'shadow',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
    },

    border: {
      none: 'border-0',
      thin: 'border',
      thick: 'border-2',
    },

    borderColor: {
      default: 'border-surface-200 dark:border-surface-700',
      subtle: 'border-surface-100 dark:border-surface-800',
      strong: 'border-surface-300 dark:border-surface-600',
    },
  },
  defaultVariants: {
    background: 'white',
    size: 'none',
    rounded: 'md',
    shadow: 'none',
    border: 'none',
    borderColor: 'default',
  },
});
