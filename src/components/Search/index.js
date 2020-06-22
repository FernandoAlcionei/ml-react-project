import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Input from '../Input';
import ButtonIcon from '../ButtonIcon';
import images from '../../config/images';
import './styles.scss';

const { icons } = images;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  onSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick();
  }

  render() {
    const { onClick, value, onChangeValue } = this.props;

    return (
      <div className="search-component">
        <form onSubmit={this.onSubmit.bind(this)} className="search-form">
          <Input
            value={value}
            onChange={(text) => onChangeValue(text)}
            placeholder="Buscar..."
          />

          <ButtonIcon onClick={() => onClick()} imageIcon={icons.search} size="18px" />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
};

export default Search;
