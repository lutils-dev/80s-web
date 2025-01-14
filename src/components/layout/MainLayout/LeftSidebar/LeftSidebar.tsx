import { Link } from 'react-router-dom';

import { LeftSidebarComponent } from './types';

import { Card } from '@/components/ui/Card/Card';
import { Text } from '@/components/ui/Text/Text';
import { useTranslation } from '@/i18n';

const LeftSidebar: LeftSidebarComponent = () => {
  const { t } = useTranslation();

  const navItems = [{ title: t('leftSidebar.home'), href: '/' }];

  return (
    <Card
      as='aside'
      className='h-auto w-full space-y-4 md:h-full md:w-64'
      rounded='none'
      background='medium'
    >
      <nav>
        <ul className='flex space-x-2 md:block md:space-x-0 md:space-y-0.5'>
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.href}
                className='block px-1 hover:bg-gray-200 dark:hover:bg-gray-700'
              >
                <Text intent='primary' size='md'>
                  {item.title}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Card>
  );
};

export default LeftSidebar;
