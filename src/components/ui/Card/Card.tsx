import { CardComponent } from './types';
import { cardVariants } from './variants';

export const Card: CardComponent = ({
  as: Component = 'div',
  className,
  children,
  ...variants
}) => {
  return (
    <Component
      className={cardVariants({
        class: className,
        ...variants,
      })}
    >
      {children}
    </Component>
  );
};
