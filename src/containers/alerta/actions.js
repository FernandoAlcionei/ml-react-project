import * as types from './actionTypes';

export function limparReducer() {
  return { type: types.LIMPAR_REDUCER };
}

export function adicionarAlerta(titulo, tipo, timeout = 5000) {
  return {
    type: types.ADICIONAR_ALERTA,
    payload: {
      mensagem: {
        id: new Date().getTime(),
        titulo,
        timeout,
        tipo,
      },
    },
  };
}

export function removerAlerta(id) {
  return {
    type: types.REMOVER_ALERTA,
    payload: { id },
  };
}
