import { ui, defaultLang } from './ui';

export function useTranslations(lang?: string) {
  const selectedLang = (
    lang && lang in ui ? lang : defaultLang
  ) as keyof typeof ui;

  return ui[selectedLang];
}
