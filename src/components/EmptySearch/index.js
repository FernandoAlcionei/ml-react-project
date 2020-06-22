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
            Não há anúncios que coincidam com a sua busca.
          </span>

          <ul className="tips">
            <li>Revise a ortografia da palavra.</li>
            <li>Utilize palavras mais genéricas ou menos palavras.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default EmptySearch;
