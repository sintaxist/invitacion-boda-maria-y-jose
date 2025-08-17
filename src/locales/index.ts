import esTranslations from './es.json';
import enTranslations from './en.json';

export const LANGUAGES = {
  es: {
    name: 'Español',
    flag: `<svg viewBox="0 0 15 10" width="15" height="10"><path d="M0 0h15v10H0z" fill="#c8102e"/><path d="M0 0h15v5H0z" fill="#ffc72c"/></svg>`,
    translations: esTranslations
  },
  en: {
    name: 'English',
    flag: `<svg viewBox="0 0 5 3" width="15" height="10"><path fill="#012169" d="M0 0h5v3H0z"/><path fill="#FFF" d="m5 0v3h-5V0zM1.9 0v3H3V0zM0 1.1v.8h5v-.8z"/><path fill="#C8102E" d="M2.1 0v3h.8V0zM0 1.3v.4h5v-.4z"/></svg>`,
    translations: enTranslations
  }
};

export type AppLocale = keyof typeof LANGUAGES;

export const defaultLang: AppLocale = 'es';