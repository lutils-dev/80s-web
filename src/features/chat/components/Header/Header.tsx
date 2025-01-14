import { HeaderComponent } from './types';

import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/ui/Card/Card';
import { Dropdown } from '@/components/ui/Dropdown/Dropdown';
import { Text } from '@/components/ui/Text/Text';
import { ThemeToggle } from '@/features/theme/components/ThemeToggle/ThemeToggle';
import {
  changeLanguage,
  supportedLanguages,
  useTranslation,
  Language,
} from '@/i18n';

export const Header: HeaderComponent = () => {
  const { t } = useTranslation();

  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang);
  };

  return (
    <Card
      as='header'
      className='sticky top-0 z-10 col-span-2 w-full'
      rounded='none'
    >
      <div className='mx-auto flex flex-col items-center justify-between md:flex-row'>
        <Text className='mb-2 text-sm md:mb-0'>{t('chat.title')}</Text>
        <div className='flex items-center space-x-2'>
          <Dropdown
            trigger={
              <Button intent='ghost' size='sm'>
                {t('settings.language')}
              </Button>
            }
            items={supportedLanguages.map((lang) => ({
              label: lang.toUpperCase(),
              onClick: () => handleLanguageChange(lang),
            }))}
          />
          <ThemeToggle />
        </div>
      </div>
    </Card>
  );
};
