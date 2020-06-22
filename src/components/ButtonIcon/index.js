import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { getClasses } from '../../lib/utils';

class ButtonIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { imgIcon, icon, color, onClick, size } = this.props;

    return (
      <button
        type="button"
        className="btn-icon-component"
        onClick={onClick}
      >
        { imgIcon ? (
          <img src={imgIcon} className="img-icon" alt="Carregando..." style={{ width: size, height: size }} />
        ) : (
          <i className={getClasses(['icon-svg', icon])} style={{ width: size, height: size, backgroundColor: color }} />
        )}
      </button>
    );
  }
}

ButtonIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  imgIcon: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string.isRequired,
};

ButtonIcon.defaultProps = {
  imgIcon: '',
  icon: '',
  color: '',
};

export default ButtonIcon;
