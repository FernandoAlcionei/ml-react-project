import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { titulo, preco, descricao, imagem, cidade } = this.props;

    return (
      <div className="card-component">
        <img src={imagem} alt="Imagem do produto" className="img-card" />

        <div className="info-produto">
          <span className="price"> $ {preco} </span>
          <span className="endereco"> { cidade } </span>
          <h3 className="titulo"> {titulo} </h3>
          <h3 className="titulo"> {descricao} </h3>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  preco: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
};

Card.defaultProps = {};

export default Card;
