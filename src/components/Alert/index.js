import React, { Component } from 'react';
import './styles.scss';
import { PropTypes } from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import { getClasses } from '../../utils/index';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    const { alert: { id, timeout }, remove } = this.props;

    setTimeout(() => remove(id), timeout);
  }

  render() {
    const { remove, alert } = this.props;

    return (
      <div className={getClasses(['alert-component', alert.type])}>
        <span>
          { alert.title }
        </span>

        <ButtonIcon onClick={() => remove(alert.id)} icon="close" color="#FFF" size="14px" />
      </div>
    );
  }
}

Alert.propTypes = {
  remove: PropTypes.func.isRequired,
  alert: PropTypes.object.isRequired,
};

Alert.defaultProps = {};

export default Alert;
