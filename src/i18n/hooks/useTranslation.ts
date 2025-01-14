import { useTranslation as useI18nTranslation } from 'react-i18next';

import { Translations } from '../types';

type PathsToStringProps<T> = T extends string
  ? []
  : {
      [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
    }[Extract<keyof T, string>];

type Join<T extends string[], D extends string> = T extends []
  ? never
  : T extends [infer F]
    ? F
    : T extends [infer F, ...infer R]
      ? F extends string
        ? `${F}${D}${Join<Extract<R, string[]>, D>}`
        : never
      : string;

export const useTranslation = () => {
  const { t: originalT, i18n } = useI18nTranslation();

  const t = <Path extends Join<PathsToStringProps<Translations>, '.'>>(
    key: Path,
    options?: Record<string, unknown>,
  ): string => {
    return originalT(key, options);
  };

  return { t, i18n };
};
