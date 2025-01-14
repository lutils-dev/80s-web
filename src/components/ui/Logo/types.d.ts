import { VariantProps } from 'class-variance-authority';
import { FC } from 'react';

import { logoVariants } from './variants';

export interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
}

export type LogoComponent = FC<LogoProps>;
