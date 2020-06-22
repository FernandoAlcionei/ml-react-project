import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withTranslation } from 'react-i18next';
import Card from '../../../components/Card/index';
import { getParamUrl } from '../../../lib/utils';
import Loader from '../../../components/Loader/index';
import EmptySearch from '../../../components/EmptySearch';
import './styles.scss';

class ProductListView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(nextProps) {
    if (this.isSearchChanged(nextProps)) {
      this.getProducts();
    }
  }

  componentDidMount() {
    const { t } = this.props;
    document.title = t('Mercado Libre');

    this.getProducts();
  }

  componentWillUnmount() {
    const { clearReducer } = this.props;
    clearReducer();
  }

  isSearchChanged(nextProps) {
    const { location } = nextProps;
    const nextPropsSearch = getParamUrl('search', location);
    const currentSearch = this.getSearchValue();

    return currentSearch !== nextPropsSearch;
  }

  getSearchValue() {
    const { location } = this.props;
    return getParamUrl('search', location);
  }

  getProducts() {
    const { getProductList } = this.props;
    const search = this.getSearchValue();

    getProductList(search);
  }

  renderCards() {
    const { products, loadingView } = this.props;

    if (!loadingView) {
      return products.map((product) => (
        <Card key={product.id} product={product} />
      ));
    }

    return null;
  }

  renderEmptySearch() {
    const { products, loadingView } = this.props;

    if (!loadingView && !products.length) {
      return <EmptySearch />;
    }

    return null;
  }

  render() {
    const { loadingView } = this.props;

    return (
      <div className="product-list-view">
        <div className="wrap-list">
          <Loader show={loadingView} />

          { this.renderEmptySearch() }

          { this.renderCards() }
        </div>
      </div>
    );
  }
}

ProductListView.propTypes = {
  clearReducer: PropTypes.func.isRequired,
  getProductList: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  loadingView: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(ProductListView);
