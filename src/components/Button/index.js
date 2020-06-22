import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getClasses } from '../../lib/utils';
import './styles.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, onClick, btnType, className, disable } = this.props;

    return (
      <button
        disabled={disable}
        type="button"
        className={getClasses(['btn-component', btnType, className])}
        onClick={onClick}
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  btnType: PropTypes.string,
  disable: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  btnType: 'btn-primary',
  disable: false,
};

export default Button;
