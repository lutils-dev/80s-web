import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { fetchTranslations } from './api';
import enTranslations from './locales/en.json';
import { Language } from './types';

export const supportedLanguages: Language[] = ['en', 'vi'];
export const defaultLanguage: Language = 'vi';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
  },
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = async (lang: Language) => {
  if (lang !== 'en') {
    const translations = await fetchTranslations(lang);
    i18n.addResourceBundle(lang, 'translation', translations, true, true);
  }
  await i18n.changeLanguage(lang);
};

export default i18n;
