import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const options = {
  order: ['querystring', 'cookie', 'localStorage'],
  lookupQuerystring: 'lng'
}

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  fallbackLng: 'en',
  detection: options,
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    es: {
      translations: require('./locales/es/translations.json')
    },
    fa: {
      translations: require('./locales/fa/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'es', 'fa'];

export default i18n;