import { connect } from 'react-redux';
import ProductListView from './ProductListView';
import { clearReducer, sagaProductList } from '../actions';

const ProductListContainer = ProductListView;

const mapStateToProps = (state) => ({
  products: state.productListReducer.products,
  loadingView: state.productListReducer.loadingView,
});

const mapDispatchToProps = (dispatch) => ({
  clearReducer: () => dispatch(clearReducer()),
  getProductList: (search, t) => dispatch(sagaProductList(search, t)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
