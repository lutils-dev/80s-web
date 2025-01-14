import { useRef, useState, useEffect } from 'react';

import { TooltipComponent } from './types';
import { tooltipVariants } from './variants';

export const Tooltip: TooltipComponent = ({
  content,
  children,
  placement = 'top',
  delayShow = 200,
  delayHide = 0,
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleShow = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true), delayShow);
  };

  const handleHide = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(false), delayHide);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (disabled || !content) {
    return <>{children}</>;
  }

  return (
    <div
      className='relative inline-flex'
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
      onFocus={handleShow}
      onBlur={handleHide}
    >
      {children}
      <div
        role='tooltip'
        className={tooltipVariants({
          placement,
          isVisible,
        })}
      >
        {content}
      </div>
    </div>
  );
};
