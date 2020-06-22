import { connect } from 'react-redux';
import ProdutoView from './ProdutoView';
import { sagaInfoProduto, sagaCompraProduto } from '../actions';

const ProdutoContainer = ProdutoView;

const mapStateToProps = (state) => ({
  produto: state.produtoReducer.produto,
  descriptions: state.produtoReducer.descriptions,
  loadingView: state.produtoReducer.loadingView,
});

const mapDispatchToProps = (dispatch) => ({
  getProduto: (busca) => dispatch(sagaInfoProduto(busca)),
  compraProduto: (id) => dispatch(sagaCompraProduto(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProdutoContainer);
