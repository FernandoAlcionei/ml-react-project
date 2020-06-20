import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import mensagens from '../../config/mensagens';
import Mask from '../Mask/index';
import Button from '../Button/index';
import ButtonIcon from '../ButtonIcon';
import { getClasses } from '../../utils/index';

const { campoObrigatorio } = mensagens;

class Input extends Component {
  constructor(props) {
    super(props);

    this._input = {};

    this.state = {
      classInvalid: '',
      msgDeErro: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { formSubmitted, formInvalid, disabled } = this.props;

    if (
      (prevProps.formSubmitted !== formSubmitted && formSubmitted)
      || (formInvalid && prevProps.formInvalid !== formInvalid)
      || (disabled && prevProps.disabled !== disabled)) {
      this.validarInput();
    }
  }

  onChangeValue(e) {
    const { onChange, typeMask } = this.props;

    if (typeMask) {
      const valueMask = Mask(typeMask).apply(e.target.value);

      onChange(valueMask);
    } else {
      onChange(e.target.value);
    }
  }

  isMaskInvalid = () => {
    const { typeMask, value } = this.props;

    if (!typeMask) return false;

    return !Mask(typeMask).isValid(value);
  }

  validarInput() {
    const { disabled, formInvalid, value, required, typeMask } = this.props;
    const classInvalid = 'input-invalid';

    this.setState({ classInvalid: '', msgDeErro: '' });
    this._input.setCustomValidity('');

    if (disabled) return;

    if (formInvalid) {
      this.setState({ classInvalid });
    }

    if (required && !value) {
      this.setState({ classInvalid, msgDeErro: campoObrigatorio });
    } else if (value && this.isMaskInvalid()) {
      const msg = Mask(typeMask).msgDeErro;

      this._input.setCustomValidity(msg);
      this.setState({ classInvalid, msgDeErro: msg });
    }
  }

  renderLabel = (label, id, required) => label && (
    <label htmlFor={id} className="label-input">
      {label} { required ? '*' : '' }
    </label>
  )

  renderBtn = () => {
    const { showBtn, btnIcon, onClickBtn, btnLeftIcon, btnType, btnStyle } = this.props;

    if (showBtn) {
      return (
        <Button onClick={() => onClickBtn()} label="Buscar" btnSmall btnType={btnStyle} type={btnType} leftIcon={btnLeftIcon} />
      );
    }

    if (btnIcon) {
      return (
        <ButtonIcon onClick={() => onClickBtn()} icon={btnIcon} />
      );
    }

    return null;
  }

  render() {
    const { label, value, id, type, className, placeholder, typeStyle, required, disabled } = this.props;
    const { msgDeErro, classInvalid } = this.state;

    return (
      <div className={className}>
        <div className={getClasses(['input-component', typeStyle, classInvalid])}>
          { this.renderLabel(label, id, required) }

          <div className="wrap-input-field">
            <input
              ref={(refs) => { this._input = refs; }}
              id={id}
              type={type}
              value={value}
              onChange={(event) => this.onChangeValue(event)}
              className="input-field"
              placeholder={placeholder}
              required={required}
              onBlur={() => this.validarInput()}
              disabled={disabled}
            />

            { this.renderBtn() }
          </div>

          <span className="msg-de-erro">
            { msgDeErro }
          </span>
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  formInvalid: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  typeStyle: PropTypes.string,
  required: PropTypes.bool,
  formSubmitted: PropTypes.bool,
  typeMask: PropTypes.string,
  disabled: PropTypes.bool,
  showBtn: PropTypes.bool,
  onClickBtn: PropTypes.func,
  btnIcon: PropTypes.string,
  btnLeftIcon: PropTypes.string,
  btnStyle: PropTypes.string,
  btnType: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  formInvalid: false,
  type: 'text',
  value: '',
  className: '',
  placeholder: '',
  typeStyle: 'input-grey',
  id: '',
  required: false,
  formSubmitted: false,
  typeMask: '',
  disabled: false,
  showBtn: false,
  onClickBtn: null,
  btnIcon: '',
  btnLeftIcon: '',
  btnStyle: 'btn-grey',
  btnType: 'button',
};

export default Input;
