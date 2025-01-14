import { VariantProps } from 'class-variance-authority';
import { FC } from 'react';

import { cardVariants } from './variants';

export interface CardProps extends VariantProps<typeof cardVariants> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export type CardComponent = FC<CardProps>;
