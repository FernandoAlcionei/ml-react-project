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
    const { imgIcon, onClick } = this.props;

    return (
      <button
        type="button"
        className="btn-icon-component"
        onClick={onClick}
      >
        <img src={imgIcon} className="img-icon" alt="Carregando..." />
      </button>
    );
  }
}

ButtonIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  imgIcon: PropTypes.string.isRequired,
};

ButtonIcon.defaultProps = { };

export default ButtonIcon;
