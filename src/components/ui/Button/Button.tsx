import { twMerge } from 'tailwind-merge';

import { Icon } from '../Icon/Icon';
import { Tooltip } from '../Tooltip/Tooltip';

import { ButtonComponent } from './types';
import { buttonVariants } from './variants';

export const Button: ButtonComponent = ({
  className,
  size = 'md',
  icon,
  tooltip,
  tooltipPlacement,
  children,
  ...props
}) => {
  const isIconOnly = icon && !children;

  const buttonContent = (
    <button
      className={twMerge(
        buttonVariants({ ...props, iconOnly: isIconOnly }),
        className,
      )}
      {...props}
    >
      {icon && <Icon icon={icon} size={size} />}
      {!isIconOnly && <span>{children}</span>}
    </button>
  );

  if (tooltip) {
    return (
      <Tooltip content={tooltip} placement={tooltipPlacement}>
        {buttonContent}
      </Tooltip>
    );
  }

  return buttonContent;
};
