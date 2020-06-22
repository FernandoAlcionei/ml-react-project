import { connect } from 'react-redux';
import ProductDetailsView from './ProductDetailsView';
import { clearReducer, sagaProductDetails, sagaBuyProduct } from '../actions';

const ProductDetailsContainer = ProductDetailsView;

const mapStateToProps = (state) => ({
  product: state.productDetailsReducer.product,
  loadingView: state.productDetailsReducer.loadingView,
});

const mapDispatchToProps = (dispatch) => ({
  clearReducer: () => dispatch(clearReducer()),
  getProductDetails: (id) => dispatch(sagaProductDetails(id)),
  buyProduct: (id) => dispatch(sagaBuyProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer);
