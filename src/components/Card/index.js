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
    const { id, title } = this.props;

    return `/items/${id}?title=${title}`;
  }

  render() {
    const { title, price, description, thumbnail, state } = this.props;

    return (
      <div className="card-component">
        <Link to={this.getCardLink()}>
          <img src={thumbnail} alt={title} className="thumbnail" />
        </Link>

        <div className="product-info">
          <Link to={this.getCardLink()} className="price">
            $ {price}
          </Link>

          <span className="state">
            {state}
          </span>

          <Link to={this.getCardLink()}>
            <h2 className="title">
              {title}
            </h2>

            <h3 className="description">
              {description}
            </h3>
          </Link>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

Card.defaultProps = {};

export default Card;
