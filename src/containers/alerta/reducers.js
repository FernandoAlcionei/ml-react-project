import { createReducer } from 'reduxsauce';
import * as types from './actionTypes';

const INITIAL_STATE = { mensagens: [] };

const limparReducer = () => ({ ...INITIAL_STATE });

const adicionarAlerta = (state = INITIAL_STATE, action) => ({
  ...state,
  mensagens: state.mensagens.concat([action.payload.mensagem]),
});

const removerAlerta = (state = INITIAL_STATE, action) => {
  const { mensagens } = state;
  const listaDeMensagens = [];

  mensagens.forEach((mensagem) => {
    if (mensagem.id !== action.payload.id) {
      listaDeMensagens.push(mensagem);
    }
  });

  return ({ ...state, mensagens: listaDeMensagens });
};

export const alertaReducer = createReducer(INITIAL_STATE, {
  [types.LIMPAR_REDUCER]: limparReducer,
  [types.ADICIONAR_ALERTA]: adicionarAlerta,
  [types.REMOVER_ALERTA]: removerAlerta,
});
