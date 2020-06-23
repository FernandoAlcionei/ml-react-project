import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withTranslation } from 'react-i18next';
import './styles.scss';
import Loader from '../../../components/Loader';
import Product from '../components/Product';

class ProductDetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getProductDetails, t } = this.props;
    const { match: { params: { id } } } = this.props;

    window.scrollTo(0, 0);

    getProductDetails(id, t);
  }

  componentWillUnmount() {
    const { clearReducer } = this.props;
    clearReducer();
  }

  buy() {
    const { t, product: { id }, buyProduct } = this.props;

    buyProduct(id, t);
  }

  renderProduct() {
    const { loadingView, product } = this.props;

    if (!loadingView && product.id) {
      document.title = product.title;

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
  t: PropTypes.func.isRequired,
  clearReducer: PropTypes.func.isRequired,
  getProductDetails: PropTypes.func.isRequired,
  buyProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  loadingView: PropTypes.bool.isRequired,
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }).isRequired }).isRequired,
};

export default withTranslation()(ProductDetailsView);
