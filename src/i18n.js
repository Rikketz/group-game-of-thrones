import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translations: {
        'CASA': "HOUSE"
      },
      translation:{
        'ALIANZAS': "ALLIANCES"
      },

    },
    sp: {
      translations:{
        'CASA': "CASA"
      }, 
      translation:{
        'ALIANZAS': "ALIANZAS"
      },


    },
  };  

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en'
  });

export default i18n;
