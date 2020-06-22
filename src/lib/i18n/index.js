import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationEs } from '../../config/translations/translations';


const resources = { es: { translation: translationEs } };

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    keySeparator: false,
    interpolation: { escapeValue: false },
  });

export default i18n;
