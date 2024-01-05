import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { en, zh } from "./locales";
i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
   fallbackLng: "en",
   debug: true,
   resources: { en, zh },
   interpolation: {
      escapeValue: false,
      default
   }
});export default i18n;
