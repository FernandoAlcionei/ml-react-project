import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Alert from '../../../components/Alert';

class AlertaView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    const { clearReducer } = this.props;
    clearReducer();
  }

  render() {
    const { alerts, deleteAlert } = this.props;

    return (
      <div className="alert-view">
        {
          alerts.map((alert) => (
            <Alert key={alert.id} alert={alert} remove={deleteAlert} />
          ))
        }
      </div>
    );
  }
}

AlertaView.propTypes = {
  clearReducer: PropTypes.func.isRequired,
  alerts: PropTypes.array.isRequired,
  deleteAlert: PropTypes.func.isRequired,
};

export default AlertaView;
