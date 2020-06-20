import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import { getClasses } from '../../utils/index';

class LinkBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderLeftIcon = (leftIcon) => leftIcon && (
    <i className={getClasses(['icon-svg', leftIcon])} />
  )

  renderBtn() {
    const { history, label, leftIcon } = this.props;

    return (
      <button className="btn-route" type="button" onClick={() => history.goBack()}>
        { this.renderLeftIcon(leftIcon) } { label }
      </button>
    );
  }

  renderLink() {
    const { leftIcon, route, label } = this.props;

    return (
      <Link className="link-route" to={route}>
        { this.renderLeftIcon(leftIcon) } { label }
      </Link>
    );
  }

  render() {
    const { goBack } = this.props;

    return (
      <div className="link-component">
        {
          goBack
            ? this.renderBtn()
            : this.renderLink()
        }
      </div>
    );
  }
}

LinkBtn.propTypes = {
  label: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  route: PropTypes.string,
  history: PropTypes.object,
  goBack: PropTypes.bool,
};

LinkBtn.defaultProps = {
  leftIcon: '',
  route: '',
  history: {},
  goBack: false,
};

export default LinkBtn;
