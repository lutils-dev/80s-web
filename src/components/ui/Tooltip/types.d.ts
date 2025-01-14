import { VariantProps } from 'class-variance-authority';
import { FC, ReactNode } from 'react';

import { tooltipVariants } from './variants';

export type TooltipPlacement = NonNullable<
  VariantProps<typeof tooltipVariants>['placement']
>;

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  placement?: TooltipPlacement;
  delayShow?: number;
  delayHide?: number;
  disabled?: boolean;
}

export type TooltipComponent = FC<TooltipProps>;
