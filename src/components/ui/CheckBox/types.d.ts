import {
  ForwardRefExoticComponent,
  InputHTMLAttributes,
  RefAttributes,
} from 'react';
import { VariantProps } from 'class-variance-authority';
import { checkboxVariants } from './variants';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
}

export type CheckboxComponent = ForwardRefExoticComponent<
  CheckboxProps & RefAttributes<HTMLInputElement>
>;
