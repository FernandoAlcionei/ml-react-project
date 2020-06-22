import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getCardLink() {
    const { id } = this.props;

    return `/produto/${id}`;
  }

  render() {
    const { titulo, preco, descricao, imagem, cidade } = this.props;

    return (
      <div className="card-component">
        <Link to={this.getCardLink()}>
          <img src={imagem} alt="Imagem do produto" className="img-card" />
        </Link>

        <div className="info-produto">
          <span className="price"> $ {preco} </span>
          <span className="endereco"> { cidade } </span>
          <Link to={this.getCardLink()}>
            <h3 className="titulo"> {titulo} </h3>
            <h3 className="titulo"> {descricao} </h3>
          </Link>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  preco: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
};

Card.defaultProps = {};

export default Card;
