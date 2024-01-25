import i18n from "i18next";
import translationEN from './en.json';
import translationIT from './it.json';
import { initReactI18next } from "react-i18next";

const defaultLang = "en";
export const defaultNS = "common";

const resources = {
    en: {
        common: translationEN
    },
    it: {
        common: translationIT
    }
};

export const getLang = () => {
    const currentLang = localStorage.getItem('lang');
    return resources[currentLang] ? currentLang : defaultLang;
}

export const setLang = (lang) => {
    localStorage.setItem('lang', lang);
}


i18n
    .use(initReactI18next)
    .init({
        fallbackLng: defaultLang,
        lng: localStorage.getItem('lang') || defaultLang,
        interpolation: {
            escapeValue: false,
        },
        resources: resources,
        languages: Object.keys(resources),
    });

    console.log(i18n);

export default i18n;