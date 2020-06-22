import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Button from '../../../../components/Button';
import './styles.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDescription = (description) => (
    <p key={description.id} className="description">
      { description.plain_text }
    </p>
  )

  render() {
    const { product, descriptions, buy } = this.props;

    return (
      <div className="product-component">
        <div className="wrap-product-info">
          <div className="wrap-product-img">
            <img className="product-img" src={product.pictures[0].url} alt={product.title} />
          </div>

          <div className="product-info">
            <span className="sold-quantity">
              { product.condition } - { product.sold_quantity } vendidos
            </span>

            <h2 className="title">
              { product.title }
            </h2>

            <span className="price">
              $ { product.price }
            </span>

            <Button className="buy-btn" onClick={() => buy()} label="Comprar" />
          </div>
        </div>

        <div className="wrap-descriptions">
          <span className="description-label">
            Descrição do produto
          </span>

          { descriptions.map((description) => this.renderDescription(description)) }
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  buy: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  descriptions: PropTypes.array.isRequired,
};

export default Product;
