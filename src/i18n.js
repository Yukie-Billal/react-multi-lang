// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
   en: {
      translation: {
         "welcome": "Welcome",
         "description": "This is an example of a multilingual app."
      }
   },
   id: {
      translation: {
         "welcome": "Selamat Datang",
         "description": "Ini adalah contoh aplikasi multibahasa."
      }
   }
};

i18n
   .use(initReactI18next)
   .init({
      resources,
      lng: 'en', // bahasa default
      interpolation: {
         escapeValue: false // react sudah melakukan escape secara otomatis
      }
   });

export default i18n;
