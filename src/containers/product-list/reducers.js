import { createReducer } from 'reduxsauce';
import * as types from './actionTypes';

const INITIAL_STATE = {
  loadingView: false,
  produtos: [],
  busca: '',
};

const loading = (state = INITIAL_STATE, action) => ({
  ...state,
  loadingView: action.payload.loading,
});

const adicionaProdutos = (state = INITIAL_STATE, action) => ({
  ...state,
  produtos: action.payload.produtos,
});

export const produtosReducer = createReducer(INITIAL_STATE, {
  [types.LOADING]: loading,
  [types.ADICIONA_PRODUTOS]: adicionaProdutos,
});
