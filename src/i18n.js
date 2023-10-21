import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        "translated-paragraph": "CHARACTERS"
      }
    },
    sp: {
      translation: {
        "translated-paragraph": "PERSONAJES"
      }
    }
  };  

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'sp',
    fallbackLng: 'en'
  });

export default i18n;
