import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const fallbackLanguage = ['en'];
const availableLanguages = ['en', 'ja', 'es'];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(resourcesToBackend((language, namespace, callback) => {
    console.log(`importing ./locales/${language}/${namespace}.json`);
    import(`./locales/${language}/${namespace}.json`)
      .then((resources) => {
        callback(null, resources)
      })
      .catch((error) => {
        callback(error, null)
      })
  }))
  .init({
    fallbackLanguage,
    detection: {
      checkWhitelist: true,
    },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;