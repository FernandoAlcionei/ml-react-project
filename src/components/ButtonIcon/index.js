import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { getClasses } from '../../utils/index';

class ButtonIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { icon, onClick, color, className } = this.props;

    return (
      <button
        type="button"
        className={getClasses(['btn-icon-component', className])}
        onClick={onClick}
      >
        <i className={getClasses(['icon-svg', icon])} style={{ backgroundColor: color }} />
      </button>
    );
  }
}

ButtonIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

ButtonIcon.defaultProps = {
  color: '',
  className: '',
};

export default ButtonIcon;
