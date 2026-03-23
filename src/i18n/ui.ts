import en from './locales/en';
import es from './locales/es';

export const languages = {
  en: 'English',
  es: 'Español'
};

export const defaultLang = 'en';

export function getI18nStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}

export const ui = {
  en,
  es
} as const;
