import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { getClasses } from '../../lib/utils';
import './styles.scss';

const ButtonIcon = ({ onClick, imageIcon, icon, color, size, testid, t }) => {
  const getIconStyle = () => ({ width: size, height: size, backgroundColor: color });

  const renderIcon = () => {
    if (imageIcon) {
      return (
        <img
          data-testid="image-icon"
          src={imageIcon}
          className="img-icon"
          alt={t('cargando')}
          style={getIconStyle()}
        />
      );
    }

    return (
      <i data-testid="icon-svg" className={getClasses(['icon-svg', icon])} style={getIconStyle()} />
    );
  };

  return (
    <button
      data-testid={testid}
      type="button"
      className="btn-icon-component"
      onClick={onClick}
    >
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
  testid: PropTypes.string,
  t: PropTypes.func.isRequired,
};

ButtonIcon.defaultProps = {
  imageIcon: '',
  icon: '',
  color: '',
  testid: 'button-icon-component',
};

export default withTranslation()(ButtonIcon);
