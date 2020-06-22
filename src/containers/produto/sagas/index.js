import { takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import { infoProduto, listaDescricaoProduto } from './ProdutoSaga';
import Api from '../../../api';

const api = Api.create();

export const produtoSagas = [
  takeLatest(types.SAGA_INFO_PRODUTO, infoProduto, api),
  takeLatest(types.SAGA_LISTA_DESCRICAO_PRODUTO, listaDescricaoProduto, api),
];
