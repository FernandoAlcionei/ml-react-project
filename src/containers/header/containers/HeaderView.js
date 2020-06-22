import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';
import Search from '../../../components/Search';
import images from '../../../config/images';
import Breadcrumb from '../../../components/Breadcrumb';

const { logo } = images;

const mockBreadcrumb = ['Electrónica, Audio y Video', 'iPod', 'Reproductores', 'iPod touch', '32 GB'];

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
        <div className="header">
          <div className="content">
            <Link to="/">
              <img src={logo} className="logo" alt="Mercado Livre" />
            </Link>

            <Search location={location} onClick={(busca) => this.getLista(busca)} placeholder="Buscar..." />
          </div>
        </div>

        <div className="wrap-breadcrumb">
          <Breadcrumb lista={mockBreadcrumb} />
        </div>
      </div>
    );
  }
}

HeaderView.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default HeaderView;
