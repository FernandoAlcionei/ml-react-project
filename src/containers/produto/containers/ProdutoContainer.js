import { connect } from 'react-redux';
import ProdutoView from './ProdutoView';
import { sagaInfoProduto } from '../actions';

const ProdutoContainer = ProdutoView;

const mapStateToProps = (state) => ({
  produto: state.produtoReducer.produto,
  descriptions: state.produtoReducer.descriptions,
  loadingView: state.produtoReducer.loadingView,
});

const mapDispatchToProps = (dispatch) => ({ getProduto: (busca) => dispatch(sagaInfoProduto(busca)) });

export default connect(mapStateToProps, mapDispatchToProps)(ProdutoContainer);
