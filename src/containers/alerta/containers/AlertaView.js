import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Alert from '../../../components/Alert';

class AlertaView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    const { limparReducer } = this.props;
    limparReducer();
  }

  render() {
    const { mensagens, removerAlerta } = this.props;

    return (
      <div className="alerta-view">
        {
          mensagens.map((mensagem) => (
            <Alert key={mensagem.id} alerta={mensagem} remover={removerAlerta} />
          ))
        }
      </div>
    );
  }
}

AlertaView.propTypes = {
  limparReducer: PropTypes.func.isRequired,
  mensagens: PropTypes.array.isRequired,
  removerAlerta: PropTypes.func.isRequired,
};

export default AlertaView;
