import React from 'react';
import PropTypes from 'prop-types';
import { getClasses } from '../../lib/utils';
import './styles.scss';

const ButtonIcon = ({ onClick, imageIcon, icon, color, size }) => {
  const getIconStyle = () => ({ width: size, height: size, backgroundColor: color });

  const renderIcon = () => {
    if (imageIcon) {
      return (
        <img src={imageIcon} className="img-icon" alt="Cargando..." style={getIconStyle()} />
      );
    }

    return (
      <i className={getClasses(['icon-svg', icon])} style={getIconStyle()} />
    );
  };

  return (
    <button type="button" className="btn-icon-component" onClick={onClick}>
      { renderIcon() }
    </button>
  );
};

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
