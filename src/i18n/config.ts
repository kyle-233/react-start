import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import languageDetector from 'i18next-browser-languagedetector'
import httpBackend from 'i18next-http-backend'
import resourcesToBackend from 'i18next-resources-to-backend'
import chainedBackend from 'i18next-chained-backend'
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

export const supportedLngs = ['en', 'zh']

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(chainedBackend)
  .init({
    backend: {
      backends: [
        httpBackend,
        resourcesToBackend((language: string, namespace: string) => {
          if (language === 'dev') return
          return import(`./locales/${language}/${namespace}.json`)
        }),
      ],
      backendOptions: [
        {
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
      ],
    },
    supportedLngs,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
