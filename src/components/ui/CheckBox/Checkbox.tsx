import { forwardRef } from 'react';
import { FiCheck } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';

import { CheckboxComponent } from './types';
import { checkboxVariants } from './variants';

export const Checkbox: CheckboxComponent = forwardRef(
  ({ className, label, checked, onChange, ...props }, ref) => {
    return (
      <label className='inline-flex items-center gap-2'>
        <div className='relative'>
          <input
            type='checkbox'
            ref={ref}
            checked={checked}
            onChange={onChange}
            className='peer sr-only'
            {...props}
          />
          <div className={twMerge(checkboxVariants({ checked }), className)}>
            {checked && <FiCheck className='h-3 w-3 text-white' />}
          </div>
        </div>
        {label && (
          <span className='text-sm text-surface-900 dark:text-surface-100'>
            {label}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
