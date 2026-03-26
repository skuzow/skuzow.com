import en from './locales/en';
import es from './locales/es';

export const defaultLang = 'en';

export const languages = {
  en: 'English',
  es: 'Español'
};

export const localeCodes = Object.keys(languages);

export const i18nStaticPaths = () => {
  return localeCodes
    .filter((lang) => lang !== defaultLang)
    .map((lang) => ({ params: { lang } }));
};

export const ui = {
  en,
  es
} as const;
