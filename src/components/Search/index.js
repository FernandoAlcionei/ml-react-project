import React from 'react';
import { PropTypes } from 'prop-types';
import Input from '../Input';
import ButtonIcon from '../ButtonIcon';
import images from '../../config/images';
import './styles.scss';

const { icons } = images;

const Search = ({ onClick, value, onChangeValue }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <div className="search-component">
      <form onSubmit={onSubmit} className="search-form">
        <Input
          value={value}
          onChange={(text) => onChangeValue(text)}
          placeholder="Nunca dejes de buscar"
        />

        <ButtonIcon onClick={() => onClick()} imageIcon={icons.search} size="18px" />
      </form>
    </div>
  );
};

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
};

export default Search;
