import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementType, ReactElement } from 'react';

import { textVariants } from './variants';

declare type TextVariantProps = VariantProps<typeof textVariants>;

declare type TextProps<C extends ElementType> = {
  as?: C;
  className?: string;
  children: React.ReactNode;
} & TextVariantProps &
  Omit<
    ComponentPropsWithoutRef<C>,
    keyof TextVariantProps | 'as' | 'className' | 'children'
  >;

declare type TextComponent = <C extends ElementType = 'span'>(
  props: TextProps<C>,
) => ReactElement | null;

export { TextProps, TextComponent };
