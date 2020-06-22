import React from 'react';
import './styles.scss';

const NotFoundView = () => (
  <div data-testid="not-found-view" className="not-found-view">
    <span className="status">
      404
    </span>

    <span className="message">
      Página no encontrada.
    </span>
  </div>
);

export default NotFoundView;
