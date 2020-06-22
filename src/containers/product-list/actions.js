import * as types from './actionTypes';

export function sagaListaProdutos(busca) {
  return {
    type: types.SAGA_LISTA_PRODUTOS,
    payload: { busca },
  };
}

export function loading(loadingView) {
  return {
    type: types.LOADING,
    payload: { loading: loadingView },
  };
}

export function adicionaProdutos(produtos) {
  return {
    type: types.ADICIONA_PRODUTOS,
    payload: { produtos },
  };
}
