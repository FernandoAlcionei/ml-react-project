import { connect } from 'react-redux';
import HeaderView from './HeaderView';
import { sagaListaProdutos } from '../../produtos/actions';

const HeaderContainer = HeaderView;

const mapStateToProps = (state) => ({ busca: state.produtosReducer.busca });

const mapDispatchToProps = (dispatch) => ({ getListaProdutos: (busca) => dispatch(sagaListaProdutos(busca)) });

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
