export type * from './types';

export { fetchTranslations } from './api';

export { default as i18n, changeLanguage, supportedLanguages } from './config';

export { useTranslation } from './hooks/useTranslation';
