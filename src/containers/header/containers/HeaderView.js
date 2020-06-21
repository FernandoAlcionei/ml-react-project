import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import Search from '../../../components/Search';
import images from '../../../config/images';

const { logo } = images;

class HeaderView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getLista(busca = '') {
    const { getListaProdutos } = this.props;

    getListaProdutos(busca);
  }

  render() {
    return (
      <div className="header-view">
        <img src={logo} className="logo" alt="Mercado Livre" />

        <Search onClick={(busca) => this.getLista(busca)} placeholder="Buscar..." />
      </div>
    );
  }
}

HeaderView.propTypes = { getListaProdutos: PropTypes.func.isRequired };

export default HeaderView;
