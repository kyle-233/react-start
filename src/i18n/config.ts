import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import languageDetector from 'i18next-browser-languagedetector'
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      edit: 'Welcome to React and react-i18next',
    },
  },
  zh: {
    translation: {
      edit: 'Bienvenue à React et react-i18next',
    },
  },
}

export const supportedLngs = ['en', 'zh']

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    supportedLngs,
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
