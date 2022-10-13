import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  // Позволяет загружать языки отдельными чанками
  .use(Backend)
  // Определяет язык пользователя из куки/локального хранилища и тд
  .use(LanguageDetector)
  // passes i18n down to react-i18next
  .use(initReactI18next)
  .init({
    // Дефолтный язык, если детектор не обнаружил язык
    fallbackLng: 'en',

    // Дебаг для консоли
    debug: __IS_DEV__,

    // Путь для загрузки переводов
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  })

export default i18n
