import React, { Component } from 'react';
import './styles.scss';

class NotFoundView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="not-found-view">
        <span className="status">
          404
        </span>

        <span className="message">
          Página não encontrada.
        </span>
      </div>
    );
  }
}

export default NotFoundView;
