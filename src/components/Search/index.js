import React, { Component } from 'react';
import './styles.scss';
import { PropTypes } from 'prop-types';
import Input from '../Input';
import ButtonIcon from '../ButtonIcon/index';
import images from '../../config/images';

const { icons } = images;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { busca: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    const { onClick } = this.props;
    const { busca } = this.state;

    onClick(busca);
  }

  render() {
    const { onClick, placeholder } = this.props;
    const { busca } = this.state;

    return (
      <div className="search-component">
        <form onSubmit={this.onSubmit.bind(this)} className="search-form">
          <Input
            value={busca}
            onChange={(value) => this.setState({ busca: value })}
            placeholder={placeholder}
          />

          <ButtonIcon onClick={() => onClick(busca)} icon="icon-search" imgIcon={icons.search} />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Search.defaultProps = { placeholder: '' };

export default Search;
