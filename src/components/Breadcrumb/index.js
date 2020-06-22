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
    const { categories } = this.props;

    return (
      <div className="breadcrumb-component">
        { categories.map((categoria, index) => (
          <span key={categoria.id} className="label">
            { categoria.name } { this.renderIcon(categories.length, index)}
          </span>
        ))}
      </div>
    );
  }
}

Breadcrumb.propTypes = { categories: PropTypes.array.isRequired };

Breadcrumb.defaultProps = {};

export default Breadcrumb;
