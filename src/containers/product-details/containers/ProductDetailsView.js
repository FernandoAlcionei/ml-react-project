import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import Loader from '../../../components/Loader';
import { getParamUrl } from '../../../lib/utils';
import Product from '../components/Product';

class ProductDetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getProductDetails } = this.props;
    const { location, match: { params: { id } } } = this.props;

    document.title = getParamUrl('title', location);

    getProductDetails(id);
  }

  componentWillUnmount() {
    const { clearReducer } = this.props;
    clearReducer();
  }

  buy() {
    const { product: { id }, buyProduct } = this.props;

    buyProduct(id);
  }

  renderProduct() {
    const { loadingView, product } = this.props;

    if (!loadingView && product.id) {
      return (
        <Product buy={() => this.buy()} product={product} />
      );
    }

    return null;
  }

  render() {
    const { loadingView } = this.props;

    return (
      <div className="product-view">
        <Loader show={loadingView} />

        { this.renderProduct() }
      </div>
    );
  }
}

ProductDetailsView.propTypes = {
  clearReducer: PropTypes.func.isRequired,
  getProductDetails: PropTypes.func.isRequired,
  buyProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  loadingView: PropTypes.bool.isRequired,
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }).isRequired }).isRequired,
};

export default ProductDetailsView;
