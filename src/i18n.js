import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "../src/locales/de/translation.json";
import en from "../src/locales/en/translation.json";
const resources = {
  de: {
    translation: de,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
