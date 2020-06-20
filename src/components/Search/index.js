import React, { Component } from 'react';
import './styles.scss';
import { PropTypes } from 'prop-types';
import Input from '../Input';

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
    const { className, onClick, placeholder } = this.props;
    const { busca } = this.state;

    return (
      <div className={className}>
        <div className="search-component">
          <form onSubmit={this.onSubmit.bind(this)}>
            <Input
              value={busca}
              onChange={(value) => this.setState({ busca: value })}
              placeholder={placeholder}
              showBtn
              onClickBtn={() => onClick(busca)}
              btnStyle="btn-primary"
              btnLeftIcon="icon-search"
              btnType="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  className: '',
  placeholder: '',
};

export default Search;
