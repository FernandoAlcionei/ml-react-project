import { connect } from 'react-redux';
import ProductDetailsView from './ProductDetailsView';
import { sagaProductDetails, sagaBuyProduct } from '../actions';

const ProductDetailsContainer = ProductDetailsView;

const mapStateToProps = (state) => ({
  product: state.productDetailsReducer.product,
  productDescriptions: state.productDetailsReducer.productDescriptions,
  loadingView: state.productDetailsReducer.loadingView,
});

const mapDispatchToProps = (dispatch) => ({
  getProductDetails: (id) => dispatch(sagaProductDetails(id)),
  buyProduct: (id) => dispatch(sagaBuyProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer);
