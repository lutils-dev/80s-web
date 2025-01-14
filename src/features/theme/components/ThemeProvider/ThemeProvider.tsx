import { useEffect } from 'react';

import { useThemeStore } from '../../hooks/useThemeStore';

import { ThemeProviderComponent } from './types';

export const ThemeProvider: ThemeProviderComponent = ({ children }) => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <>{children}</>;
};
