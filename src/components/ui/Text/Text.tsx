import { TextComponent } from './types';
import { textVariants } from './variants';

export const Text: TextComponent = ({
  as: Component = 'span',
  className,
  children,
  ...props
}) => {
  return (
    <Component className={textVariants({ ...props, class: className })}>
      {children}
    </Component>
  );
};
