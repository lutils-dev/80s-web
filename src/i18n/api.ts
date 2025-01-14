import { mockTranslations } from './mock';

export const fetchTranslations = async (lang: string) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (lang in mockTranslations) {
    return mockTranslations[lang as keyof typeof mockTranslations];
  }

  throw new Error(`Language ${lang} not supported`);
};
