import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getClasses } from '../../lib/utils';
import './styles.scss';

class ButtonIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getIconStyle() {
    const { color, size } = this.props;

    return ({ width: size, height: size, backgroundColor: color });
  }

  renderIcon() {
    const { imageIcon, icon } = this.props;

    if (imageIcon) {
      return (
        <img src={imageIcon} className="img-icon" alt="Carregando..." style={this.getIconStyle()} />
      );
    }

    return (
      <i className={getClasses(['icon-svg', icon])} style={this.getIconStyle()} />
    );
  }

  render() {
    const { onClick } = this.props;

    return (
      <button type="button" className="btn-icon-component" onClick={onClick}>
        { this.renderIcon() }
      </button>
    );
  }
}

ButtonIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  imageIcon: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string.isRequired,
};

ButtonIcon.defaultProps = {
  imageIcon: '',
  icon: '',
  color: '',
};

export default ButtonIcon;
