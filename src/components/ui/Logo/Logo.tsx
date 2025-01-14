import { LogoComponent } from './types';
import { logoVariants } from './variants';

import logoSrc from '@/assets/images/logo.svg';

const Logo: LogoComponent = ({ className, size }) => {
  return (
    <img
      src={logoSrc}
      alt='Cooto Logo'
      className={logoVariants({ class: className, size })}
    />
  );
};

export default Logo;
