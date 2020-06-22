import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Breadcrumb = ({ categories }) => {
  const renderIcon = (index) => {
    if (index < (categories.length - 1)) {
      return <i className="icon-svg chevron-right" />;
    }

    return null;
  };

  const renderCategory = (category, index) => (
    <span key={category.id} className="label">
      { category.name } { renderIcon(index) }
    </span>
  );

  return (
    <div className="breadcrumb-component">
      { categories.map((category, index) => renderCategory(category, index))}
    </div>
  );
};

Breadcrumb.propTypes = { categories: PropTypes.array.isRequired };

export default Breadcrumb;
