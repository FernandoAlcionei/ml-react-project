import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import { withTranslation } from 'react-i18next';

const EmptySearch = ({ t }) => (
  <div data-testid="empty-search-component" className="empty-search-component">
    <div>
      <span className="message">
        {t('No hay anuncios que coincidan con su búsqueda')}
      </span>

      <ul className="tips">
        <li>
          {t('Revisa la ortografía de la palabra')}
        </li>
        <li>
          {t('Use palabras más genéricas o menos palabras')}
        </li>
      </ul>
    </div>
  </div>
);

EmptySearch.propTypes = { t: PropTypes.func.isRequired };

export default withTranslation()(EmptySearch);
