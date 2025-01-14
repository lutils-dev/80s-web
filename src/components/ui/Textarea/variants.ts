// src/components/ui/Textarea/variants.ts
import { cva } from 'class-variance-authority';

export const textareaVariants = cva([
  'w-full resize-none bg-transparent px-3 py-2',
  'text-surface-900 dark:text-surface-100',
  'placeholder:text-surface-400 dark:placeholder:text-surface-500',
  'focus:outline-none',
  'disabled:opacity-50',
]);
