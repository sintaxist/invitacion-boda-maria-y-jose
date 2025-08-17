import esTranslations from './es.json';
import enTranslations from './en.json';

export const LANGUAGES = {
  es: {
    name: 'Español',
    translations: esTranslations
  },
  en: {
    name: 'English',
    translations: enTranslations
  },
};

export type AppLocale = keyof typeof LANGUAGES;

export const defaultLang: AppLocale = 'es';