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
        Não foi encontrado nenhum resultado.
      </div>
    );
  }
}

export default MsgSemResultado;
