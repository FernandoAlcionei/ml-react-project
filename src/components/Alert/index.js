import React, { Component } from 'react';
import './styles.scss';
import { PropTypes } from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import { getClasses } from '../../utils/index';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    const { alerta: { id, timeout }, remover } = this.props;

    setTimeout(() => remover(id), timeout);
  }

  render() {
    const { remover, alerta } = this.props;

    return (
      <div className={getClasses(['alert-component', alerta.tipo])}>
        <span>
          { alerta.titulo }
        </span>

        <ButtonIcon onClick={() => remover(alerta.id)} icon="close" color="#FFF" />
      </div>
    );
  }
}

Alert.propTypes = {
  remover: PropTypes.func.isRequired,
  alerta: PropTypes.object.isRequired,
};

Alert.defaultProps = {};

export default Alert;
