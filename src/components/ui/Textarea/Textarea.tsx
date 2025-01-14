// src/components/ui/Textarea/Textarea.tsx
import { forwardRef, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { Card } from '../Card/Card';

import { TextareaComponent } from './types';
import { textareaVariants } from './variants';

export const Textarea: TextareaComponent = forwardRef(
  (
    {
      className,
      containerProps,
      maxRows = 5,
      autoResize = true,
      children,
      onChange,
      ...props
    },
    ref,
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
      if (autoResize && textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        const scrollHeight = textareaRef.current.scrollHeight;
        const lineHeight = 24;
        const maxHeight = maxRows * lineHeight;
        const newHeight = Math.min(scrollHeight, maxHeight);
        textareaRef.current.style.height = `${newHeight}px`;
      }
    }, [props.value, autoResize, maxRows]);

    return (
      <Card
        {...containerProps}
        className={twMerge(
          'relative focus-within:ring-2 focus-within:ring-brand-400/50',
          containerProps?.className,
        )}
      >
        <textarea
          ref={(element) => {
            if (typeof ref === 'function') {
              ref(element);
            } else if (ref) {
              ref.current = element;
            }
            textareaRef.current = element;
          }}
          className={twMerge(textareaVariants(), className)}
          onChange={(e) => {
            if (onChange) onChange(e);
            if (autoResize) {
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
            }
          }}
          {...props}
        />
        {children}
      </Card>
    );
  },
);

Textarea.displayName = 'Textarea';
