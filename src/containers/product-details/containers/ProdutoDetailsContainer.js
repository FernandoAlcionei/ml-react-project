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
  getProductDetails: (id, t) => dispatch(sagaProductDetails(id, t)),
  buyProduct: (id, t) => dispatch(sagaBuyProduct(id, t)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer);
