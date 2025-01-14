import { useThemeStore } from '../../hooks/useThemeStore';

import { ThemeToggleComponent } from './types';

import { Button } from '@/components/ui/Button/Button';

export const ThemeToggle: ThemeToggleComponent = () => {
  const theme = useThemeStore((state) => state.theme);
  const { toggleTheme } = useThemeStore.getState();

  return (
    <Button onClick={toggleTheme} intent='ghost' size='sm'>
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
};
