import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const options = {
  order: ['querystring', 'cookie', 'localStorage'],
  lookupQuerystring: 'lng',
  // next-i18next by default searches for the "next-i18next" cookie on server requests
  lookupCookie: "next-i18next",
  lookupLocalStorage: "i18nextLng",
  caches: ["cookie", "localStorage"]
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
  react: {
    // trigger a rerender when language is changed
    bindI18n: "languageChanged",
    // we're NOT using suspsense to detect when the translations have loaded
    useSuspense: false
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'es', 'fa'];

export default i18n;