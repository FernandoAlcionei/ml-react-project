import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import images from '../../config/images';
import './styles.scss';
import { formatPrice } from '../../lib/utils';

const { icons } = images;

const Card = ({ product: { id, title, price, condition, picture, state, free_shipping: freeShipping } }) => {
  const productLink = `/items/${id}`;

  const renderFreeShipping = () => (freeShipping ? (
    <img data-testid="free-shipping" src={icons.shipping} alt="Envío gratis" className="free-shipping" />
  ) : null);

  return (
    <div className="card-component" data-testid={id}>
      <Link data-testid="link-picture" to={productLink}>
        <img src={picture} alt={title} className="picture" />
      </Link>

      <div className="product-info">
        <Link to={productLink} className="price">
          <span>
            { formatPrice(price.amount, price.currency) }
          </span>

          { renderFreeShipping(freeShipping) }
        </Link>

        <span className="state">
          {state}
        </span>

        <Link data-testid="link-details" to={productLink}>
          <h2 className="title">
            {title}
          </h2>

          <span className="condition">
            {condition}
          </span>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    free_shipping: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Card;
