import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en.json';
import translationES from './locales/es.json';
import translationCA from './locales/ca.json';
import translationGL from './locales/gl.json';
import translationFR from './locales/fr.json';
import translationDE from './locales/de.json';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
  ca: {
    translation: translationCA
  },
  gl: {
    translation: translationGL
  },
  fr: {
    translation: translationFR
  },
  de: {
    translation: translationDE
  }
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: localStorage.getItem('language') || 'es',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18next;