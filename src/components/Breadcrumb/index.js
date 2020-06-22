import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Breadcrumb extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderIcon = (listSize, index) => ((index < (listSize - 1)) ? (
    <i className="icon-svg chevron-right" />
  ) : null);

  render() {
    const { lista } = this.props;

    return (
      <div className="breadcrumb-component">
        { lista.map((categoria, index) => (
          <span className="label">
            { categoria } { this.renderIcon(lista.length, index)}
          </span>
        ))}
      </div>
    );
  }
}

Breadcrumb.propTypes = { lista: PropTypes.array.isRequired };

Breadcrumb.defaultProps = {};

export default Breadcrumb;
