import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from "./translationEN.json";
import translationFR from "./translationFR.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  // init i18next
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {

      en: {
        translation: translationEN
      },
      fr: {
        translation: translationFR
      }
    }
  });

  

export default i18n;


