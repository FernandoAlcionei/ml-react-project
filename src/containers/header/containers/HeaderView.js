import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';
import Search from '../../../components/Search';
import images from '../../../config/images';

const { logo } = images;

class HeaderView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getLista = (busca = '') => {
    const { history } = this.props;

    if (busca) {
      history.push(`/?busca=${busca}`);
    } else {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;

    return (
      <div className="header-view">
        <Link to="/">
          <img src={logo} className="logo" alt="Mercado Livre" />
        </Link>

        <Search location={location} onClick={(busca) => this.getLista(busca)} placeholder="Buscar..." />
      </div>
    );
  }
}

HeaderView.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default HeaderView;
