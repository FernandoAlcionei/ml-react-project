import { connect } from 'react-redux';
import AlertaView from './AlertaView';
import { clearReducer, deleteAlert } from '../actions';

const AlertaContainer = AlertaView;

const mapStateToProps = (state) => ({ alerts: state.alertReducer.alerts });

const mapDispatchToProps = (dispatch) => ({
  clearReducer: () => dispatch(clearReducer()),
  deleteAlert: (id) => dispatch(deleteAlert(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertaContainer);
