import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { IconProps } from '../Icon/types';
import { TooltipPlacement } from '../Tooltip/types';

import { buttonVariants } from './variants';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: IconProps['icon'];
  tooltip?: ReactNode;
  tooltipPlacement?: TooltipPlacement;
}

export type ButtonComponent = FC<ButtonProps>;
