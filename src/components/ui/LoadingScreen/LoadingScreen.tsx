import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import Logo from '@/components/ui/Logo/Logo';
import { Text } from '@/components/ui/Text/Text';
import { useTranslation } from '@/i18n';

const LoadingScreen: React.FC = () => {
  const { t } = useTranslation();
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-primary-gradient fixed inset-0 flex flex-col items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mb-8'
      >
        <Logo size='lg' className='text-indigo-600 dark:text-white' />
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${loadingProgress}%` }}
        transition={{ duration: 0.5 }}
        className='mb-4 h-1 w-64 rounded-full bg-indigo-500 dark:bg-indigo-400'
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Text
          intent='primary'
          size='lg'
          weight='md'
          className='text-indigo-700 dark:text-white'
        >
          {t('common.loading')}
        </Text>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
