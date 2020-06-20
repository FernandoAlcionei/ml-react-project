import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Colors } from '../ColorsAji/index';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { show, background, color } = this.props;

    if (!show) {
      return null;
    }

    return (
      <div className="loader-component" style={{ background }}>
        <i className="icon-svg loading" style={{ background: color }} />
      </div>
    );
  }
}

Loader.propTypes = {
  show: PropTypes.bool,
  background: PropTypes.string,
  color: PropTypes.string,
};

Loader.defaultProps = {
  show: false,
  background: Colors.greyTransparent,
  color: Colors.white,
};

export default Loader;
