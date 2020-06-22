import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { show } = this.props;

    if (!show) {
      return null;
    }

    return (
      <div className="loader-component">
        <i className="icon-svg loading" />
      </div>
    );
  }
}

Loader.propTypes = { show: PropTypes.bool };

Loader.defaultProps = { show: false };

export default Loader;
