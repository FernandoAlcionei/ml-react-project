/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import './styles.scss';
import { PropTypes } from 'prop-types';
import Button from '../Button/index';

class ModalAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickBackground(event) {
    const { btnCancelar } = this.props;
    event.preventDefault();
    btnCancelar();
    return false;
  }

  render() {
    const { show, titulo, btnConfirmar, btnCancelar } = this.props;

    if (!show) return null;

    return (
      <div className="modal-alert-component">
        <a href="#!" onClick={(event) => this.onClickBackground(event)} className="modal-background" />

        <div className="content-modal">
          <span className="titulo">{ titulo }</span>

          <div>
            <Button label="Cancelar" onClick={() => btnCancelar()} btnType="btn-grey" />
            <Button label="Confirmar" onClick={() => btnConfirmar()} />
          </div>
        </div>
      </div>
    );
  }
}

ModalAlert.propTypes = {
  show: PropTypes.bool.isRequired,
  titulo: PropTypes.string.isRequired,
  btnConfirmar: PropTypes.func.isRequired,
  btnCancelar: PropTypes.func.isRequired,
};

ModalAlert.defaultProps = {};

export default ModalAlert;
