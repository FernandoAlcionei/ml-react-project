import { createReducer } from 'reduxsauce';
import * as types from './actionTypes';

const INITIAL_STATE = {
  msgDeErro: '',
  isFormInvalid: false,
  loading: false,
};

const loginError = (state = INITIAL_STATE, action) => ({
  ...state,
  msgDeErro: action.payload.msg,
  loading: false,
  isFormInvalid: true,
});

const loading = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: action.payload.loading,
});

const limparReducer = () => ({ ...INITIAL_STATE });

export const loginReducer = createReducer(INITIAL_STATE, {
  [types.LOGIN_ERROR]: loginError,
  [types.LOADING]: loading,
  [types.LIMPAR_REDUCER]: limparReducer,
});
