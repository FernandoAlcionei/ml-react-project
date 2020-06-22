import React, { Component } from 'react';
import './styles.scss';

class EmptySearch extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="empty-search-component">
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
  }
}

export default EmptySearch;
