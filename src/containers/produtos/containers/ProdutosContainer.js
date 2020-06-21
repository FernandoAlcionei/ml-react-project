import { connect } from 'react-redux';
import ProdutosView from './ProdutosView';
import { sagaListaProdutos } from '../actions';

const ProdutosContainer = ProdutosView;

const mapStateToProps = (state) => ({
  produtos: state.produtosReducer.produtos,
  loadingView: state.produtosReducer.loadingView,
  busca: state.produtosReducer.busca,
});

const mapDispatchToProps = (dispatch) => ({ getListaProdutos: (busca) => dispatch(sagaListaProdutos(busca)) });

export default connect(mapStateToProps, mapDispatchToProps)(ProdutosContainer);
