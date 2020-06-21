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
    const { value, id, type, className, placeholder, required, disabled } = this.props;

    return (
      <div className="input-component">
        <input
          ref={(refs) => { this._input = refs; }}
          id={id}
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
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  className: '',
  placeholder: '',
  id: '',
  required: false,
  disabled: false,
};

export default Input;
