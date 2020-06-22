import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      'Mercado Libre': 'Mercado Libre',
      'Nunca dejes de buscar': 'Nunca dejes de buscar',
      comprar: 'comprar',
      cargando: 'cargando',
      'No hay anuncios que coincidan con su búsqueda': 'No hay anuncios que coincidan con su búsqueda.',
      'Revisa la ortografía de la palabra': 'Revisa la ortografía de la palabra.',
      'Use palabras más genéricas o menos palabras': 'Use palabras más genéricas o menos palabras.',
      'Página no encontrada': 'Página no encontrada.',
      vendidos: 'vendidos',
      'Descripción del produto': 'Descripción del produto',
      'Servicio temporalmente no disponible': 'Servicio temporalmente no disponible.',
      'Pago recibido con éxito': 'Pago recibido con éxito!',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    keySeparator: false,
    interpolation: { escapeValue: false },
  });

export default i18n;
