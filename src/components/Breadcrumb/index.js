import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Breadcrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderIcon(index) {
    const { categories } = this.props;

    if (index < (categories.length - 1)) {
      return <i className="icon-svg chevron-right" />;
    }

    return null;
  }

  renderCategory = (category, index) => (
    <span key={category.id} className="label">
      { category.name } { this.renderIcon(index) }
    </span>
  )

  render() {
    const { categories } = this.props;

    return (
      <div className="breadcrumb-component">
        { categories.map((category, index) => this.renderCategory(category, index))}
      </div>
    );
  }
}

Breadcrumb.propTypes = { categories: PropTypes.array.isRequired };

export default Breadcrumb;
