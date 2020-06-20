import { connect } from 'react-redux';
import AlertaView from './AlertaView';
import { limparReducer, removerAlerta } from '../actions';

const AlertaContainer = AlertaView;

const mapStateToProps = (state) => ({ mensagens: state.alertaReducer.mensagens });

const mapDispatchToProps = (dispatch) => ({
  limparReducer: () => dispatch(limparReducer()),
  removerAlerta: (id) => dispatch(removerAlerta(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertaContainer);
