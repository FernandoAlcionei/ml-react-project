import { createReducer } from 'reduxsauce';
import * as types from './actionTypes';

const INITIAL_STATE = {
  loadingView: false,
  produto: {},
  descriptions: [],
};

const loading = (state = INITIAL_STATE, action) => ({
  ...state,
  loadingView: action.payload.loading,
});

const adicionaProduto = (state = INITIAL_STATE, action) => ({
  ...state,
  produto: action.payload.produto,
});

const adicionaDescricaoProduto = (state = INITIAL_STATE, action) => ({
  ...state,
  descriptions: action.payload.descriptions,
});

export const produtoReducer = createReducer(INITIAL_STATE, {
  [types.LOADING]: loading,
  [types.ADICIONA_PRODUTO]: adicionaProduto,
  [types.ADICIONA_DESCRICAO_PRODUTO]: adicionaDescricaoProduto,
});
