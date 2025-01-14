import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import LoadingScreen from '@/components/ui/LoadingScreen/LoadingScreen';
import { ThemeProvider } from '@/features/theme/components/ThemeProvider/ThemeProvider';
import { changeLanguage, defaultLanguage } from '@/i18n/config';
import AppRoutes from '@/routes';
import { AppComponent } from '@/types';

const App: AppComponent = () => {
  const [isLoading, setIsLoading] = useState(defaultLanguage !== 'en');

  useEffect(() => {
    const initializeLanguage = async () => {
      if (defaultLanguage !== 'en') {
        try {
          await changeLanguage(defaultLanguage);
        } catch (error) {
          console.error('Failed to load default language:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    initializeLanguage();
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider>
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
