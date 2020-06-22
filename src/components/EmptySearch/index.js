import React from 'react';
import './styles.scss';

const EmptySearch = () => (
  <div data-testid="empty-search-component" className="empty-search-component">
    <div>
      <span className="message">
        No hay anuncios que coincidan con su búsqueda.
      </span>

      <ul className="tips">
        <li>Revisa la ortografía de la palabra.</li>
        <li>Use palabras más genéricas o menos palabras.</li>
      </ul>
    </div>
  </div>
);

export default EmptySearch;
