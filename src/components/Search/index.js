import React from 'react';
import { PropTypes } from 'prop-types';
import { withTranslation } from 'react-i18next';
import Input from '../Input';
import ButtonIcon from '../ButtonIcon';
import images from '../../config/images';
import './styles.scss';

const { icons } = images;

const Search = ({ onClick, value, onChangeValue, t }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <div data-testid="search-component" className="search-component">
      <form onSubmit={onSubmit} className="search-form">
        <Input
          testid="search-input"
          value={value}
          onChange={(text) => onChangeValue(text)}
          placeholder={t('Nunca dejes de buscar')}
        />

        <ButtonIcon testid="search-btn" onClick={() => onClick()} imageIcon={icons.search} size="18px" />
      </form>
    </div>
  );
};

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Search);
