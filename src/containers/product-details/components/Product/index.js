import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../../../../components/Button';
import { formatPrice } from '../../../../lib/utils';
import './styles.scss';

const Product = ({ product, buy }) => {
  const getDecimals = (decimals) => (decimals === 0 ? '00' : decimals);

  return (
    <div className="product-component">
      <div className="wrap-product-info">
        <div className="wrap-product-img">
          <img className="product-img" src={product.picture} alt={product.title} />
        </div>

        <div className="product-info">
          <span className="sold-quantity">
            { product.condition } - { product.sold_quantity } vendidos
          </span>

          <h2 className="title">
            { product.title }
          </h2>

          <div className="price">
            <span>
              { formatPrice(product.price.amount, product.price.currency) }
            </span>
            <span className="decimals">
              { getDecimals(product.price.decimals) }
            </span>
          </div>

          <Button className="buy-btn" onClick={() => buy()} label="Comprar" />
        </div>
      </div>

      <div className="wrap-descriptions">
        <span className="description-label">
          Descripción del produto
        </span>

        <p className="description">
          { product.description }
        </p>
      </div>
    </div>
  );
};

Product.propTypes = {
  buy: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

export default Product;
