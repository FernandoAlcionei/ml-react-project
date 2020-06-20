import * as types from './actionTypes';

export function sagaLogin(email, senha, history) {
  return {
    type: types.SAGA_LOGIN,
    payload: { email, senha, history },
  };
}

export function loginError(msg) {
  return {
    type: types.LOGIN_ERROR,
    payload: { msg },
  };
}

export function loading(loadingView) {
  return {
    type: types.LOADING,
    payload: { loading: loadingView },
  };
}

export function limparReducer() {
  return { type: types.LIMPAR_REDUCER };
}
