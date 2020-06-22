import { connect } from 'react-redux';
import ProductListView from './ProductListView';
import { sagaProductList } from '../actions';

const ProductListContainer = ProductListView;

const mapStateToProps = (state) => ({
  products: state.productListReducer.products,
  loadingView: state.productListReducer.loadingView,
});

const mapDispatchToProps = (dispatch) => ({ getProductList: (search) => dispatch(sagaProductList(search)) });

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
