import * as types from './actionTypes';

export function sagaInfoProduto(id) {
  return {
    type: types.SAGA_INFO_PRODUTO,
    payload: { id },
  };
}

export function loading(loadingView) {
  return {
    type: types.LOADING,
    payload: { loading: loadingView },
  };
}

export function adicionaProduto(produto) {
  return {
    type: types.ADICIONA_PRODUTO,
    payload: { produto },
  };
}

export function sagaListaDescricaoProduto(id) {
  return {
    type: types.SAGA_LISTA_DESCRICAO_PRODUTO,
    payload: { id },
  };
}

export function adicionaDescricaoProduto(descriptions) {
  return {
    type: types.ADICIONA_DESCRICAO_PRODUTO,
    payload: { descriptions },
  };
}
