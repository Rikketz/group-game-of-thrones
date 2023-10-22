import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        "translated-CASA": "HOUSE",
        "translated-ALIANZAS": "ALLIANCES",
        "translated-APARICIONES": "APPEARANCES",
        "translated-PADRE": "FATHER",
        "translated-HERMANOS": "SIBLINGS",
        "translated-TITULOS": "TITLES",
        "translated-PERSONAJES": "CHARACTERS",
        "translated-CASAS": "HOUSES",
        "translated-CRONOLOGIA": "CHRONOLOGY",
        "translated-Settlement": "SETTLEMENT",
        "translated-Region": "REGION",
        "translated-Alliances": "ALLIANCES",
        "translated-RELIGIONS": "RELIGIONS",
        "translated-FOUNDATION": "FOUNDATION",
        "translated-GAME OF THRONES": "GAME OF THRONES"


      }
    },
    es: {
      translation: {
        "translated-CASA": "CASA",
        "translated-ALIANZAS": "ALIANZAS",
        "translated-APARICIONES": "APARICIONES",
        "translated-PADRE": "PADRE",
        "translated-HERMANOS": "HERMANOS",
        "translated-TITULOS": "TITULOS",
        "translated-PERSONAJES": "PERSONAJES",
        "translated-CASAS": "CASAS",
        "translated-CRONOLOGIA": "CRONOLOGIA",
        "translated-Settlement": "ASENTAMIENTO",
        "translated-Region": "REGIÓN",
        "translated-Alliances": "ALIANZAS",
        "translated-RELIGIONS": "RELIGIONES",
        "translated-FOUNDATION": "BASE",
        "translated-GAME OF THRONES": "JUEGO DE TRONOS"
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
