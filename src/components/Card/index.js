import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import images from '../../config/images';
import './styles.scss';
import { formatPrice } from '../../lib/utils';

const { icons } = images;

const Card = ({ id, title, price, description, thumbnail, state, freeShipping }) => {
  const productLink = `/items/${id}?title=${title}`;

  const renderFreeShipping = () => (freeShipping ? (
    <img src={icons.shipping} alt="Envío gratis" className="free-shipping" />
  ) : null);

  return (
    <div className="card-component">
      <Link to={productLink}>
        <img src={thumbnail} alt={title} className="thumbnail" />
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

        <Link to={productLink}>
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
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

export default Card;
