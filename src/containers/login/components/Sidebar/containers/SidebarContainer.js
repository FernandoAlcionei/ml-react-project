import { connect } from 'react-redux';
import SidebarView from './SidebarView';
import { sagaLogin, limparReducer } from '../../../actions';

const SidebarContainer = SidebarView;

const mapStateToProps = (state) => ({
  isFormInvalid: state.loginReducer.isFormInvalid,
  msgDeErro: state.loginReducer.msgDeErro,
  loading: state.loginReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, senha, history) => dispatch(sagaLogin(email, senha, history)),
  limparReducer: () => dispatch(limparReducer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
