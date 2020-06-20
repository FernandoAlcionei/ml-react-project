import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { getClasses } from '../../utils/index';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderIcon = (icon) => icon && (
    <i className={getClasses(['icon-svg', icon])} />
  );

  sizeBtn = (btnSmall) => (btnSmall ? 'btn-small' : '');

  render() {
    const { label, btnSmall, onClick, btnType, className, leftIcon, rightIcon, type, disable } = this.props;

    /* eslint-disable react/button-has-type */
    return (
      <button
        disabled={disable}
        type={type}
        className={getClasses(['btn', btnType, className, this.sizeBtn(btnSmall)])}
        onClick={onClick}
      >
        { this.renderIcon(leftIcon) } { label } { this.renderIcon(rightIcon) }
      </button>
    );
    /* eslint-enable react/button-has-type */
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  btnType: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  btnSmall: PropTypes.bool,
  type: PropTypes.string,
  disable: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  btnType: 'btn-primary',
  leftIcon: '',
  rightIcon: '',
  btnSmall: false,
  type: 'button',
  onClick: () => {},
  disable: false,
};

export default Button;
