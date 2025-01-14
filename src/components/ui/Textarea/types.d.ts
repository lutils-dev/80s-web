// src/components/ui/Textarea/types.d.ts
import {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  TextareaHTMLAttributes,
} from 'react';

import { CardProps } from '../Card/types';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerProps?: Omit<CardProps, 'children'>;
  maxRows?: number;
  autoResize?: boolean;
  children?: ReactNode;
}

export type TextareaComponent = ForwardRefExoticComponent<
  TextareaProps & RefAttributes<HTMLTextAreaElement>
>;
