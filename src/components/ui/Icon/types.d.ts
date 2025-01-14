import { VariantProps } from 'class-variance-authority';
import { FC, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

import { iconVariants } from './variants';

export interface IconProps
  extends Omit<IconBaseProps, 'size'>, // Omit size from IconBaseProps
    VariantProps<typeof iconVariants> {
  icon: ComponentType<IconBaseProps>;
  className?: string;
}

export type IconComponent = FC<IconProps>;
