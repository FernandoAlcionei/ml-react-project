import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../../components/Button';
import Sidebar from '../../../../../components/Sidebar';
import './styles.scss';
import Loader from '../../../../../components/Loader';
import Mensagem from '../../../../../components/Mensagem';
import FormField from '../../../../../components/FormField';
import { getValueFromObjPath, setValueToObjPath } from '../../../../../utils';

class SidebarView extends Component {
  constructor(props) {
    super(props);
    const { limparReducer } = props;

    this.state = {
      isFormSubmitted: false,
      login: {
        email: '',
        senha: '',
      },
    };

    limparReducer();

    this.formLogin = [
      { tipo: 'input', label: 'E-mail', state: 'email', required: true, inputField: { typeMask: 'email', typeStyle: 'input-white' } },
      { tipo: 'input', label: 'Senha', state: 'senha', required: true, inputField: { typeStyle: 'input-white', type: 'password' } },
    ];
  }

  formSubmitted() {
    this.setState({ isFormSubmitted: true });
  }

  autenticarUsuario(event) {
    event.preventDefault();

    const { login, history } = this.props;
    const { login: { email, senha } } = this.state;

    login(email, senha, history);
  }

  setStateLogin(statePath, value) {
    let { login } = this.state;
    login = setValueToObjPath(login, value, statePath);
    this.setState({ login });
  }

  renderFormField = (field) => {
    const { isFormInvalid } = this.props;
    const { isFormSubmitted, login } = this.state;
    const { label, state, required, inputField } = field;

    const valueInput = getValueFromObjPath(state, login);

    return (
      <FormField
        key={state}
        tipoInput={field.tipo}
        label={label}
        onChange={(value) => this.setStateLogin(state, value)}
        required={required}
        valueInput={valueInput}
        isFormSubmitted={isFormSubmitted}
        isFormInvalid={isFormInvalid}
        inputField={inputField}
      />
    );
  }


  render() {
    const { loading, msgDeErro } = this.props;

    return (
      <div className="sidebar-login">
        <Sidebar>
          <Loader show={loading} />

          <h4 className="titulo">
            Acessar sistema
          </h4>

          <form onSubmit={this.autenticarUsuario.bind(this)}>
            <div className="inputs-login">
              { this.formLogin.map((item) => this.renderFormField(item)) }

              <Mensagem msg={msgDeErro} type="erro" show={Boolean(msgDeErro)} />
            </div>

            <Button type="submit" label="Entrar" onClick={() => this.formSubmitted()} />
          </form>
        </Sidebar>
      </div>
    );
  }
}

SidebarView.propTypes = {
  login: PropTypes.func.isRequired,
  limparReducer: PropTypes.func.isRequired,
  isFormInvalid: PropTypes.bool.isRequired,
  msgDeErro: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

export default SidebarView;
