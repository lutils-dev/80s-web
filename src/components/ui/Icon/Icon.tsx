import { twMerge } from 'tailwind-merge';

import { IconComponent } from './types';
import { iconVariants } from './variants';

export const Icon: IconComponent = ({
  icon: IconElement,
  size,
  className,
  ...props
}) => {
  return (
    <IconElement
      className={twMerge(iconVariants({ size }), className)}
      aria-hidden='true'
      {...props}
    />
  );
};
