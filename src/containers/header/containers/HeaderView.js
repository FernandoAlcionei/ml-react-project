import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Search from '../../../components/Search';
import Breadcrumb from '../../../components/Breadcrumb';
import images from '../../../config/images';
import { getParamUrl } from '../../../lib/utils';
import './styles.scss';

const { logo } = images;

const mockBreadcrumb = [
  { id: 'b-1', name: 'Electrónica, Audio y Video' },
  { id: 'b-2', name: 'iPod' },
  { id: 'b-3', name: 'Reproductores' },
  { id: 'b-4', name: 'iPod touch' },
  { id: 'b-5', name: '32 GB' },
];

class HeaderView extends Component {
  constructor(props) {
    super(props);

    const search = getParamUrl('search', props.location);

    this.state = { search };
  }

  searchProduct = () => {
    const { history } = this.props;
    const { search } = this.state;

    if (search) {
      history.push(`/items?search=${search}`);
    } else {
      history.push('/');
    }
  }

  render() {
    const { search } = this.state;

    return (
      <div className="header-view">
        <div className="header">
          <div className="content">
            <Link to="/">
              <img src={logo} className="logo" alt="Mercado Libre" />
            </Link>

            <Search
              value={search}
              onClick={() => this.searchProduct()}
              onChangeValue={(value) => this.setState({ search: value })}
            />
          </div>
        </div>

        <div className="wrap-breadcrumb">
          <Breadcrumb categories={mockBreadcrumb} />
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
