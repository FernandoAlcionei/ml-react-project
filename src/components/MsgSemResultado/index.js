import React, { Component } from 'react';
import './styles.scss';

class MsgSemResultado extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="msg-sem-resultado-component">
        <div>
          <span className="mensagem">
            Não há anúncios que coincidam com a sua busca.
          </span>

          <ul className="info-adicional">
            <li>Revise a ortografia da palavra.</li>
            <li>Utilize palavras mais genéricas ou menos palavras.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MsgSemResultado;
