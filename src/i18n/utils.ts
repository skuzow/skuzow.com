import { getRelativeLocaleUrl } from 'astro:i18n';

import { ui, defaultLang } from './ui';

export function useTranslations(lang: string | undefined) {
  return ui[getSelectedLang(lang)];
}

export function useLocaleUrl(locale: string | undefined) {
  const lang = getSelectedLang(locale);
  return (path: string) => getRelativeLocaleUrl(lang, path);
}

function getSelectedLang(lang: string | undefined) {
  return (lang && lang in ui ? lang : defaultLang) as keyof typeof ui;
}
