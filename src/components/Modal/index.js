/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import './styles.scss';
import { PropTypes } from 'prop-types';
import Button from '../Button/index';
import ButtonIcon from '../ButtonIcon/index';

class Modal extends Component {
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
    const { show, titulo, btnConfirmar, btnCancelar, children } = this.props;

    if (!show) return null;

    return (
      <div className="modal-component">
        <a href="#!" onClick={(event) => this.onClickBackground(event)} className="modal-background" />

        <div className="wrap-modal">
          <div className="titulo">
            { titulo }

            <ButtonIcon onClick={() => btnCancelar()} icon="close" color="#FFF" />
          </div>

          <div className="content-modal">
            { children }
          </div>

          <div className="wrap-btns">
            <Button label="Cancelar" onClick={() => btnCancelar()} btnType="btn-grey" />
            <Button label="Salvar" onClick={() => btnConfirmar()} />
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  titulo: PropTypes.string.isRequired,
  btnConfirmar: PropTypes.func.isRequired,
  btnCancelar: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

Modal.defaultProps = {};

export default Modal;
