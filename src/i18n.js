import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        "CASA": "HOUSE",
        'ALIANZAS': "ALLIANCES",
        'APARICIONES': "APPEARANCES",
        'PADRE': "FATHER",
        'HERMANOS': "SIBLINGS",
        'TITULOS': "TITLES"


      }
    },
    sp: {
      translation: {
        "CASA": "CASA",
        'ALIANZAS': "ALIANZAS",
        'APARICIONES': "APARICIONES",
        'PADRE': "PADRE",
        'HERMANOS': "HERMANOS",
        'TITULOS': "TITULOS"
        
      }
    }
  };  

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en'
  });

export default i18n;
