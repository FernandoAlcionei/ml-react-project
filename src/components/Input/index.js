import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeValue(e) {
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  render() {
    const { value, type, placeholder, required, disabled } = this.props;

    return (
      <div className="input-component">
        <input
          type={type}
          value={value}
          onChange={(event) => this.onChangeValue(event)}
          className="input-field"
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  required: false,
  disabled: false,
};

export default Input;
